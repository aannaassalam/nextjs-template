/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
import { IndustryPageTabWrapper } from "@/styles/StyledComponents/IndustryPageTabWrapper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/system";
import React, { SetStateAction } from "react";

import assest from "@/json/assest";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

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

export interface faq_data {
  _id: string;
  question: string;
  answer: string;
}

interface IndustryProps {
  faq_data: faq_data[];
  faq_loading: boolean;
}

export default function IndustryPageTab({
  faq_data,
  faq_loading
}: IndustryProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  if (faq_loading)
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "300px" }}
      >
        <CircularProgress />
      </Stack>
    );

  return (
    <IndustryPageTabWrapper>
      <Box className="wrapper_mainTab">
        <Container fixed>
          <Box className="mainInner">
            <Box className="shapeImgOne">
              <Image
                src={assest.bgRoundShape1}
                alt=""
                width={258}
                height={258}
              />
            </Box>
            <Box className="shapeImgTwo">
              <Image src={assest.arrwsss14} alt="" width={98} height={83} />
            </Box>
            <Box className="mainInner_wrap">
              <Box className="tabList">
                <Typography variant="h3">FAQ</Typography>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  {faq_data.map((_faq: faq_data) => {
                    return (
                      <Link key={_faq._id} href={`#${_faq._id}`}>
                        <Tab label={_faq.question} key={_faq._id} />
                      </Link>
                    );
                  })}
                  {/* <Tab label="Lorem ipsum dolor sit amet?" {...a11yProps(0)} />
                                    <Tab label="Lorem ipsum dolor sit amet consectetur. Elit libero vulputate?" {...a11yProps(1)} />
                                    <Tab label="Lorem ipsum dolor sit amet consectetur. At eu id at mattis?" {...a11yProps(2)} />
                                    <Tab label="Lorem ipsum dolor sit amet ?" {...a11yProps(3)} />
                                    <Tab label="Lorem ipsum dolor sit amet conse?" {...a11yProps(4)} />
                                    <Tab label="Lorem ipsum dolor sit amet conse?" {...a11yProps(5)} />
                                    <Tab label="Lorem ipsum dolor sit amet con?" {...a11yProps(6)} />
                                    <Tab label="Lorem ipsum dolor sit amet?" {...a11yProps(7)} />
                                    <Tab label="Lorem ipsum dolor sit amet consectetur?" {...a11yProps(8)} />
                                    <Tab label="Lorem ipsum dolor sit amet?" {...a11yProps(9)} /> */}
                </Tabs>
              </Box>
              <Box className="allTabInfo">
                {faq_data.map((_faq: faq_data) => (
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
                {/* <TabPanel value={value} index={0}>
                                    {industryTxtsList.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    {industryTxtsList2.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    {industryTxtsList.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    {industryTxtsList2.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    {industryTxtsList.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    {industryTxtsList2.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                    {industryTxtsList.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={7}>
                                    {industryTxtsList2.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={8}>
                                    {industryTxtsList.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel>
                                <TabPanel value={value} index={9}>
                                    {industryTxtsList2.map((item, index) => (
                                        <TabRightListMain titleTxtIs title2={item.title2} title={item.title} subTxt={item.subTxt} key={index} />
                                    ))}
                                </TabPanel> */}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </IndustryPageTabWrapper>
  );
}
