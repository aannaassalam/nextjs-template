import assest from "@/json/assest";
import { RefferenceWrap } from "@/styles/StyledComponents/RefferenceWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CircleElpsIcon from "@/ui/Icons/CircleElpsIcon";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";



export default function Refference() {
    return (
        <RefferenceWrap className="cmn_gap">
            <Container fixed>
                <Box className="refference_block">
                    <i className="crcl_ball">
                        <CircleElpsIcon />
                    </i>
                    <Image src={assest?.ref_ylw_arrw} alt="image" width={100} height={100} className="ref_ylw_arrw" />
                    <Image
                        src={assest?.why_us_grn_elps}
                        alt="image"
                        width={1000}
                        height={1000}
                        className="why_us_grn_elps"
                    />
                    <Box className="title_stack">
                        <Typography variant="h2">References</Typography>
                        <Typography>
                            73 Total references found for this organization.
                        </Typography>
                    </Box>
                    <Box className="body_block">
                        <Grid container spacing={{ lg: 8, xs: 3 }}>
                            <Grid item lg={7.5} xs={12}>
                                <Box className="body_left">
                                    <Typography variant="h3">All References</Typography>
                                    <Box className="each_comp_otr">
                                        <Box className="each_comp">
                                            <Typography>
                                                73 Total references found for this organization.
                                            </Typography>
                                            <Chip label="AIA_ESG_Report_2022_English_v1.pdf" />
                                        </Box>
                                        <Box className="each_comp">
                                            <Typography>
                                                AIA commits to achieving net-zero greenhouse gas
                                                emissions by 2050
                                            </Typography>
                                            <Chip label="Annual_Report_2021_E.pdf.coredownload.inline.pdf" />
                                        </Box>
                                        <Box className="each_comp">
                                            <Typography>
                                                AIA committed to reaching net-zero by 2050 and signed up
                                                to the SBTi in December 2021. Currently, we are in the
                                                process of developing and validating our targets with
                                                SBTi. Post validation of our targets by SBTi, we will
                                                begin to report our progress on approved and validated
                                                SBTi target metrics. In addition to reporting on SBTi,
                                                AIA will continue to evolve our reporting on the TCFD
                                                framework, the industry standard for climate-related
                                                risk and opportunities disclosure.
                                            </Typography>
                                            <Chip label="Annual_Report_2021_E.pdf.coredownload.inline.pdf" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4.5} xs={12}>
                                <Box className="body_left">
                                    <Typography variant="h3">2 Best References for
                                        This Organization</Typography>
                                    <Box className="sub_block">
                                        <Box className="each_sub_block">
                                            <Typography>
                                                In 2022, the Group produced 50,606 tonnes of CO2e, or
                                                2.0 tonnes per employee.
                                            </Typography>
                                            <Chip label="AIA_ESG_Report_2022_English_v1.pdf" />
                                        </Box>
                                        <Box className="each_sub_block">
                                            <Typography>
                                                AIA commits to achieving net-zero greenhouse gas
                                                emissions by 2050
                                            </Typography>
                                            <Chip label="Annual_Report_2021_E.pdf.coredownload.inline.pdf" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box className='btn_otr'>
                            <CustomButtonPrimary variant="contained" color="primary">
                                <Typography variant="caption">See More Results</Typography>
                            </CustomButtonPrimary>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </RefferenceWrap>
    );
}
