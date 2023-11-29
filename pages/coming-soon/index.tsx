import assest from "@/json/assest";
import { CominSoonWrapper } from "@/styles/StyledComponents/ComiungSoonWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";

export default function index() {

    const router = useRouter()

    return (
        <CominSoonWrapper>
            <Box className="commonBanner">
                <Container fixed>
                    <Box className="coming_inner">
                        <Box className="coming_main">
                            <Box className="logo_wrap">
                                <Image
                                    src={assest.header_logo}
                                    width={452}
                                    height={75}
                                    alt="Logo"
                                />
                            </Box>
                            <Typography variant="h1">We are coming soon</Typography>


                            <Typography variant="body1" className="text">Lorem ipsum dolor sit amet consectetur. Enim quis egestas scelerisque tellus posuere est.</Typography>
                            <Box className="btn_holder">
                                <CustomButtonPrimary variant="contained" color="primary" onClick={() => router.push('/')}>
                                    <Typography variant="caption">Go To Home</Typography>
                                </CustomButtonPrimary>
                            </Box>

                            <Image src={assest.roundOne} alt="" width={134} height={118} className="roundOne" />
                            <Image src={assest.dotsthree} alt="" width={181} height={57} className="roundTwo" />
                            <Image src={assest.singledot} alt="" width={17} height={17} className="roundThree" />
                        </Box>
                    </Box>


                </Container>
                <Image src={assest.bannerBottom} alt="" width={1681} height={167} className="bannerBottom" />
            </Box>
        </CominSoonWrapper>
    )
}
