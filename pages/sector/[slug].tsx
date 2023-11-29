/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
// import PopularEventTime from '@/components/HeatMap/PopularEventTime'
// import LineBarChart from '@/components/LineBarChart/LineBarChart';
import { GetSector, HomepageData, fetchFaq, fetchSectorWiseDocuments } from "@/api/functions/cms.api";
import CommonInnerSlider from "@/components/CommonInnerSlider/CommonInnerSlider";
import CommonRightNewsLetter from "@/components/CommonRightNewsLetter/CommonRightNewsLetter";
import CompanyIndustry from "@/components/CompanyIndustry/CompanyIndustry";
import { faq_data } from "@/components/IndustryPageTab/IndustryPageTab";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import ListOfCompanyItem from "@/components/ListOfCompanyItem/ListOfCompanyItem";
import ScheduleMeetingWrapTw from "@/components/ScheduleMeetingWrapTw/ScheduleMeetingWrapTw";
import UpcomingwebinarSec from "@/components/UpcomingwebinarSec/UpcomingwebinarSec";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { WrapperAllIndustry } from "@/styles/StyledComponents/WrapperAllIndustry";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";


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

export interface IOrgScores {
  org_name: string;
  overall_TCFD_score: number;
  regulatory_TCFD_score: number;
  discretionary_TCFD_score: number;
}

export const FAQBox = styled(Box)`
  width: calc(100% - 360px);
      padding: 117px 0 0 0;
  overflow: hidden;
  margin-bottom: -80px;
  position: relative;
  z-index: 99;
  @media(max-width: 1199px){
    padding: 80px 0 0;
  }
  @media(max-width: 899px){
    padding: 60px 0 0;
    margin-bottom: -40px;
    width: 100%;
  }
  @media(max-width: 599px){
    padding: 40px 0 10px;
    margin-bottom: 0;
  }
      /* @media(max-width: 1199px){
        padding-left: 20px;
      }
      @media(max-width: 899px){
        width: 100%;
        padding: 0;
      } */
`

export default function Index({ organization }: homepageProps) {

  const router = useRouter();
  const sector: string | undefined = (router?.query?.slug as string).replace("+", " ");
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

  const { data: current_sector, isLoading } = useQuery(
    ['sector_data', sector],
    async () => {
      if (sector) {
        const res = await axios.get(`/api/sector_wise_data?sector=${sector}`);
        return res.data;
      }
    }
  );

  const { data: faq_data, isLoading: faq_loading } = useQuery(["faq"], fetchFaq)

  const { data: sector_documents, isLoading: documents_loading } = useQuery(["sector_documents", sector], {
    queryFn: () => fetchSectorWiseDocuments(sector)
  })

  const handleMoreItem = () => {
    setLoading(true);
    setTimeout(() => {
      setNext(next + itemPerRow);
      setLoading(false);
    }, 1000);
  };

  const processed_sector_bar_graph_data = useMemo(() => {
    const _sector_data = current_sector?.payload?.orgs_scores?.map((_sector: IOrgScores) => ({ org_name: _sector.org_name, overall_TCFD_score: Math.round(_sector.overall_TCFD_score * 100) }))
      .sort((a: Omit<IOrgScores, "regulatory_TCFD_score" | "discretionary_TCFD_score">, b: Omit<IOrgScores, "regulatory_TCFD_score" | "discretionary_TCFD_score">) => b.overall_TCFD_score - a.overall_TCFD_score)

    return _sector_data
  }, [current_sector?.payload?.orgs_scores])


  if (isLoading) {
    return <Stack alignItems="center" justifyContent="center" sx={{ width: '100%', height: '100vh' }}>
      <CircularProgress />
    </Stack>
  }

  return (
    <Wrapper isSearchShow>
      <InnerBanner bannerText={sector ? `${sector}` : "Sector"} />
      <ScheduleMeetingWrapTw sector={sector} data={current_sector?.payload?.orgs_scores || []} search_slug="company" />
      <CommonInnerSlider bgImgIsShow documents={sector_documents?.data?.data} />
      <CompanyIndustry industryName={`${sector}% Companies Disclosing `} company_name={sector} compliance="Compliance" industryLeaders="Sector Leaders" sector_data={current_sector?.payload} total_percent={50} />
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
                  <Box className="wrapper_chartTwBtm" sx={{ marginTop: "0px !important" }}>
                    <Box className="topPart_titele">
                      <Typography variant="h2" id="Climate Disclosure Matrix">
                        Sector leaders - US banks
                      </Typography>
                      <Typography variant="body1">
                        % Total Manifesto Climate Disclosure Criteria Covered
                      </Typography>
                    </Box>
                    <LineBarChart maxOverallValue={100} graph_data={processed_sector_bar_graph_data?.slice(0, 10)} />
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
                    className="filter-menu"
                  >
                    <MenuItem onClick={handleClose}>Option 1</MenuItem>
                    <MenuItem onClick={handleClose}>Option 2</MenuItem>
                    <MenuItem onClick={handleClose}>Option 3</MenuItem>
                  </Menu>
                </Box> */}
              </Box>
              <Box className="wrapperAll_list">
                {
                  current_sector?.payload?.orgs_scores?.length > 0 ?
                    current_sector?.payload?.orgs_scores.map((item: { imagePath: string; org_name: string; starRaningValue: number; starValue: number; totalStar: string; locationTxt: string; }, index: React.Key | null | undefined) => (

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

                      </Box>)) :
                    <Stack alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
                      <Typography variant="h3" sx={{ zIndex: 2 }}>No Companies in this Sector.</Typography>
                    </Stack>
                }
              </Box>

              {next < current_sector?.payload?.orgs_scores?.length && (
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
        <Container fixed>
          <FAQBox>
            {faq_data.data?.filter((_faq: faq_data) => _faq.question.toLowerCase().includes(sector.toLowerCase())).map((_faq: faq_data) => (
              <Box
                key={_faq._id}
                role="tabpanel"
                // hidden={openTab !== index}
                id={_faq._id}
                aria-labelledby={_faq._id}
              >
                <Typography
                  variant="h3"
                  sx={{ fontSize: "28px", margin: "20px 0" }}
                >
                  {_faq.question}
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{ __html: _faq.answer }}
                  sx={{
                    ul: {
                      paddingLeft: "20px !important",
                      li: {
                        listStyle: "disc !important"
                      }
                    }
                  }}
                />
              </Box>
            ))}
          </FAQBox>
        </Container>
      </div>

    </Wrapper>
  );
}
