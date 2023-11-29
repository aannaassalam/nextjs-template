/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
// import PopularEventTime from '@/components/HeatMap/PopularEventTime'
// import LineBarChart from '@/components/LineBarChart/LineBarChart';
import { GetSector, HomepageData, fetchFaq, fetchSectorDocuments } from "@/api/functions/cms.api";
import CommonIndustyTable from "@/components/CommonIndustyTable/CommonIndustyTable";
import CommonInnerSlider from "@/components/CommonInnerSlider/CommonInnerSlider";
import CommonRightNewsLetter from "@/components/CommonRightNewsLetter/CommonRightNewsLetter";
import IndustryPageTab from "@/components/IndustryPageTab/IndustryPageTab";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import ListOfCompanyItem from "@/components/ListOfCompanyItem/ListOfCompanyItem";
import ScheduleMeetingWrapTw from "@/components/ScheduleMeetingWrapTw/ScheduleMeetingWrapTw";
import UpcomingwebinarSec from "@/components/UpcomingwebinarSec/UpcomingwebinarSec";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { WrapperAllIndustry } from "@/styles/StyledComponents/WrapperAllIndustry";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
// eslint-disable-next-line import/no-cycle
import { IOrgScores } from "./[slug]";


interface homepageProps {
  organization: HomepageData
}

const PopularEventTime = dynamic(
  // eslint-disable-next-line import/no-cycle
  () => import("@/components/HeatMap/PopularEventTime"),
  { ssr: false }
);
const LineBarChart = dynamic(
  () => import("@/components/LineBarChart/LineBarChart"),
  { ssr: false }
);



export const getServerSideProps = async () => {
  const { data: organization } = await GetSector();

  return {
    props: {
      organization
    }
  }
}

export interface OrgsDisclosing {
  "Board Oversight": number
  "Management's Role": number
  "Risks and Opportunities": number
  "Impact on Organization": number
  "Resilience of Strategy": number
  "Risk ID and Assessment Processes": number
  "Risk Management Processes": number
  "Integration into Overall Risk Management": number
  "Climate-Related Metrics": number
  "Scope 1,2,3 GHG Emissions": number
  "Climate-Related Targets": number
}
export interface Root {
  sector: string
  orgs_disclosing: OrgsDisclosing
  orgs_scores: any[]
}

export default function Index({ organization }: homepageProps) {

  //console.log("org", organization)

  const itemPerRow = 6;
  const [next, setNext] = useState(itemPerRow);
  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, isLoading } = useQuery(["sector_data"], {
    queryFn: async () => {
      const res = await axios.get("/api/sector_data");
      return res;
    }
  })

  const { data: faq_data, isLoading: faq_loading } = useQuery(["faq"], fetchFaq)

  const { data: sector_documents, isLoading: documents_loading } = useQuery(["all_sector_documents"], {
    queryFn: fetchSectorDocuments
  })

  const { data: all_sectors, isLoading: isSectorsLoading } = useQuery(['all_sectors'], async () => {
    const res = await axios.get("/api/all_sectors");
    return res.data
  })

  const handleMoreItem = () => {
    setLoading(true);
    setTimeout(() => {
      setNext(next + itemPerRow);
      setLoading(false);
    }, 1000);
  };

  const processed_sector_bar_graph_data = useMemo(() => {
    const _sector_data = data?.data?.map((_sector: Root) => _sector.orgs_scores).flat()
      .sort((a: Omit<IOrgScores, "regulatory_TCFD_score" | "discretionary_TCFD_score">, b: Omit<IOrgScores, "regulatory_TCFD_score" | "discretionary_TCFD_score">) => b.overall_TCFD_score - a.overall_TCFD_score)

    const __sector_data = _sector_data?.map((_sector: IOrgScores) => ({ org_name: _sector.org_name, overall_TCFD_score: Math.round(_sector.overall_TCFD_score * 100) }))

    return __sector_data || []
  }, [data?.data])

  return (
    <Wrapper isSearchShow>
      <InnerBanner bannerText="All Sectors" />
      <ScheduleMeetingWrapTw data={data?.data?.map((_data: Root) => ({ org_name: _data?.sector }))} sector="" search_slug="sector" isLoading={isLoading} />
      <CommonInnerSlider bgImgIsShow documents={sector_documents?.data?.data} />
      <WrapperAllIndustry>
        <Box className="mainSec_industryChart">
          <Container fixed>
            <Box className="all_wrapper_topIns">
              <Box className="imgWrapMains">
                <Image
                  src={assest.bgShapeCrick1}
                  alt=""
                  width={285}
                  height={258}
                />
              </Box>
              <Box className="imgWrapMainsTw">
                <Image
                  src={assest.shapeBlueThree11}
                  alt=""
                  width={285}
                  height={258}
                />
              </Box>
              <Box className="imgWrapMainsThree">
                <Image
                  src={assest.smallIconcircle3}
                  alt=""
                  width={285}
                  height={258}
                />
              </Box>
              <Grid container spacing={3}>
                <Grid item lg={8} xs={12}>
                  <Box className="top_chartMain">
                    <Box className="topPart_titele">
                      <Chip label="Figure A10" />
                      <Typography variant="h2" id="Heat Map">
                        Disclosure By Sector For Expanded Population: 2022
                        Fiscal Year Reporting
                      </Typography>
                      <Typography variant="body1">
                        Percent of Companies
                      </Typography>
                    </Box>
                    <Grid container alignItems="stretch">
                      <Grid item lg={5} xs={12}>
                        <CommonIndustyTable />
                        <Typography
                          variant="body1"
                          sx={{ fontSize: "13px", paddingTop: "20px" }}
                        >
                          1. The numbers in parentheses representation the size
                          of the review population
                        </Typography>
                      </Grid>
                      <Grid item lg={7} xs={12} sx={{ display: 'flex' }}>
                        <Box className="chartMain">
                          {
                            isLoading || isSectorsLoading ?
                              <Stack alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
                                <CircularProgress />
                              </Stack>
                              :
                              <>
                                <PopularEventTime max={100} height={600} data={data?.data as Root[]} sectors={all_sectors.filter((_sec: string) => _sec !== "null")} />
                                <Typography
                                  variant="body1"
                                  sx={{
                                    textAlign: "right",
                                    fontSize: "13px",
                                    paddingRight: "20px",
                                    marginTop: 'auto'
                                  }}
                                >
                                  High to low percentage of reporting
                                </Typography></>
                          }
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className="wrapper_chartTwBtm">
                    <Box className="topPart_titele">
                      <Typography variant="h2" id="Climate Disclosure Matrix" sx={{ textTransform: 'capitalize' }}>
                        Sector leaders - {processed_sector_bar_graph_data?.[0]?.org_name}
                      </Typography>
                      <Typography variant="body1">
                        % Total Manifesto Climate Disclosure Criteria Covered
                      </Typography>
                    </Box>
                    <LineBarChart maxOverallValue={100} graph_data={processed_sector_bar_graph_data.slice(0, 10)} />
                  </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <UpcomingwebinarSec />
                  {/* <ScheduleMeetingTabRight title="Talk to one of our specialists to see how you can claim your company profile page" btnTxt="Schedule Meeting" imgPath={assest.avatr_image} /> */}
                  <CommonRightNewsLetter
                    title="Newsletter"
                    paraTxt="Lorem ipsum dolor sit amet consec tetur. Euismod gravida libero."
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box className="mainWrapper_inner">
          <Container fixed>
            <Box className="mainWrap_last">
              <Box className="imgWrapMainsBtms">
                <Image
                  src={assest.smallIconcircle3}
                  alt=""
                  width={25}
                  height={25}
                />
              </Box>
              <Box className="imgWRapper_oneTw">
                <Image
                  src={assest.iconWrapperCircleImg1}
                  alt=""
                  width={234}
                  height={234}
                />
              </Box>
              <Box className="shapeImgOne">
                <Image
                  src={assest.bgRoundShape1}
                  alt=""
                  width={258}
                  height={258}
                />
              </Box>
              <Box className="shapeImgNines">
                <Image
                  src={assest.arrwssikds3}
                  alt=""
                  width={258}
                  height={258}
                />
              </Box>

              <Box className="topTitle_wrapperIns">
                <Typography variant="h2" id="Companies">List of companies</Typography>
                {/* <Box className="filterWrap">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Filter
                    <FilterIconMain />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button"
                    }}
                  >
                    <MenuItem onClick={handleClose}>Option 1</MenuItem>
                    <MenuItem onClick={handleClose}>Option 2</MenuItem>
                    <MenuItem onClick={handleClose}>Option 3</MenuItem>
                  </Menu>
                </Box> */}
              </Box>
              <Box className="wrapperAll_list">
                {organization.payload.slice(0, next)?.map((item: { imagePath: string; org_name: string; starRaningValue: number; starValue: number; totalStar: string; locationTxt: string; }, index: React.Key | null | undefined) => (

                  <Box className="wrapperAll_listSingle" key={index}>
                    <ListOfCompanyItem
                      imagePath={item.imagePath}
                      txtTitle={item.org_name}
                      starRaningValue={item.starRaningValue}
                      starValue={item.starValue}
                      totalStar={item.totalStar}
                      locationTxt={item.locationTxt}
                      orgName={item?.org_name}
                    />

                  </Box>
                ))}
              </Box>

              {next < organization.payload?.length && (
                <CustomButtonPrimary variant='contained' color='primary'
                  className="mt-433"
                  onClick={handleMoreItem}
                  disabled={loading}
                >
                  {loading ? "Loading...." : "Load More"}
                </CustomButtonPrimary>
              )}

            </Box>
          </Container>
        </Box>
      </WrapperAllIndustry>
      <div id="Faq">
        <IndustryPageTab faq_data={faq_data?.data} faq_loading={faq_loading} />
      </div>

    </Wrapper>
  );
}
