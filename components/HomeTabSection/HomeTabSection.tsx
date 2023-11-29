/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
import { HomeTabSectionWrapper } from "@/styles/StyledComponents/HomeTabSectionWrapper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

import assest from "@/json/assest";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Image from "next/image";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
// eslint-disable-next-line import/no-cycle
import HomeTabListCommon from "../HomeTabListCommon/HomeTabListCommon";

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{ flex: 1 }}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

interface org {
  organization: string | any
}


export interface Root {
  success: boolean
  // eslint-disable-next-line no-use-before-define
  payload: Payload
}

export interface Payload {
  sector: string
  // eslint-disable-next-line no-use-before-define
  orgs_disclosing: OrgsDisclosing
  // eslint-disable-next-line no-use-before-define
  orgs_scores: OrgsScore[]
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

export interface OrgsScore {
  org_name: string
  overall_TCFD_score: number
  regulatory_TCFD_score: number
  discretionary_TCFD_score: number
}

export interface orgs {
  org_sector: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;

  org_id: string | any;
  org_name: string;
  starRatingValue: number;
  startNo: number;
  companyLogo: string;
  overall_TCFD_score: number;
}





export default function HomeTabSection({ organization, sectors = [] }: { organization: org, sectors: string[] }) {
  //console.log(organization?.organization, "organizationddddd")
  const [value, setValue] = React.useState(0);
  const [sectorName, setSectorName] = React.useState(sectors[0]);

  interface Axioserror {
    response: {
      data: {
        payload: {
          data: string
        }
      }
    }
  }

  const { data: payload = [], isLoading, isError, error } = useQuery<any, Axioserror>(["sector wise data", sectorName, sectors[0]], {
    queryFn: async () => {
      const res = await axios.get(`/api/sector_wise_data?sector=${encodeURIComponent(sectorName || sectors[0])}`)
      return res
    },
  })

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    const selectedOrgSector = sectors[newValue];
    setSectorName(selectedOrgSector)
  };

  return (
    <HomeTabSectionWrapper>
      <Container fixed>
        <Box className="mainInner">
          <Box className="shapeImgOne">
            <Image src={assest.bgRoundShape1} alt="" width={258} height={258} />
          </Box>
          <Box className="shapeImgTwo">
            <Image src={assest.bgRoundShape2} alt="" width={258} height={258} />
          </Box>
          <Box className="mainInner_wrap">
            <Box className="tabList">
              <Typography variant="h3">Industries</Typography>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                {sectors.map((item: string, index: any) => {
                  return (
                    <Tab label={item} {...a11yProps(index)} key={index} />

                  )
                })}
              </Tabs>
            </Box>
            <Box className="allTabInfo">
              {isLoading ? (
                <Stack alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
                  <CircularProgress />
                </Stack>
              ) :
                isError ? <p>{error.response?.data.payload?.data}</p> :
                  payload?.data?.payload?.orgs_scores.length ? (
                    <TabPanel value={value} index={value} >
                      <Grid container spacing={{ lg: 3, md: 2, xs: 1 }}>
                        {payload?.data?.payload?.orgs_scores?.map((item: orgs, index: any) => (
                          <Grid item lg={4} md={4} sm={6} xs={12} key={index}>

                            <HomeTabListCommon
                              title={item.org_name}
                              starRatingValue={item.starRatingValue}
                              startNo={item.startNo}
                              companyLogo={item.companyLogo}
                              imgWidth={143}
                              imgHeight={43}
                              company={item?.org_name}
                              score={item?.overall_TCFD_score}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </TabPanel>
                  ) : (
                    <Stack alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
                      <Typography variant="h3">No Companies in this Sector.</Typography>
                    </Stack>
                  )}
            </Box>
          </Box>
        </Box>
      </Container>
    </HomeTabSectionWrapper>
  );
}
