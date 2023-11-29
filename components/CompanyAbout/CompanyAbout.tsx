/* eslint-disable react/no-array-index-key */
import { CompanyAboutStyled } from "@/styles/StyledComponents/CompanyAboutStyled";
import { primaryColors } from "@/themes/_muiPalette";
import CoverageIcon from "@/ui/Icons/CoverageIcon";
import DocIcon from "@/ui/Icons/DocIcon";
import DocumentIcon from "@/ui/Icons/DocumentIcon";
import OverallIcon from "@/ui/Icons/OverallIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface score {
    score: string | any;
}

const CompanyAbout = (score: score) => {


    return (
        <CompanyAboutStyled>
            <Container fixed>
                <Grid container spacing={2}>
                    {/* {
                        companyAbtCard.map((item, index) => ( */}

                    <Grid item lg={3} md={6} xs={12} >

                        <Stack direction="row" className="companyAbtCard" >
                            <Box className="companyAbtCardIcon"><Box className="iconClr" bgcolor={primaryColors?.colorFBF5E3}><OverallIcon /></Box></Box>

                            <Box className="companyAbtCardTxt">
                                <Typography variant="h4">{score?.score?.scores?.overall_TCFD_score.toFixed(3) ? (score?.score?.scores?.overall_TCFD_score as number * 100).toFixed(1) : "0"} % Overall</Typography>
                                <Typography variant="caption" > TCFD Coverage </Typography>
                            </Box>
                        </Stack>
                    </Grid>




                    <Grid item lg={3} md={6} xs={12} >

                        <Stack direction="row" className="companyAbtCard" >
                            <Box className="companyAbtCardIcon"><Box className="iconClr" bgcolor={primaryColors?.colorFEF1EC}><DocumentIcon /></Box></Box>

                            <Box className="companyAbtCardTxt">
                                <Typography variant="h4">{score?.score?.files.length ? score?.score?.files.length : "0"} Documents</Typography>
                                <Typography variant="caption" >With Climate Disclosure </Typography>
                            </Box>
                        </Stack>
                    </Grid>


                    <Grid item lg={3} md={6} xs={12} >

                        <Stack direction="row" className="companyAbtCard" >
                            <Box className="companyAbtCardIcon"><Box className="iconClr" bgcolor={primaryColors?.colorF1EEF5}><CoverageIcon /></Box></Box>

                            <Box className="companyAbtCardTxt">
                                <Typography variant="h4">{score?.score?.scores?.regulatory_TCFD_score.toFixed(3) ? (score?.score?.scores?.regulatory_TCFD_score as number * 100).toFixed(1) : "0"} % Coverage</Typography>
                                <Typography variant="caption" >TCFD From Regulatory Docs </Typography>
                            </Box>
                        </Stack>
                    </Grid>



                    <Grid item lg={3} md={6} xs={12} >

                        <Stack direction="row" className="companyAbtCard" >
                            <Box className="companyAbtCardIcon"><Box className="iconClr" bgcolor={primaryColors?.colorF3FBF5}><DocIcon /></Box></Box>

                            <Box className="companyAbtCardTxt">
                                <Typography variant="h4">{score?.score?.scores?.discretionary_TCFD_score.toFixed(3) ? (score?.score?.scores?.discretionary_TCFD_score as number * 100).toFixed(1) : "0"} % Coverage</Typography>
                                <Typography variant="caption" >TCFD From Discretionary Docs </Typography>
                            </Box>
                        </Stack>
                    </Grid>



                    {/* ))
                    } */}
                </Grid>
            </Container>
        </CompanyAboutStyled>


    )
}

export default CompanyAbout