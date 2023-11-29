import assest from "@/json/assest";
import { CommonBannerStyled } from "@/styles/StyledComponents/CommonBannerStyled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface bannerProps {
    bannerText?: string;
}

const InnerBanner = ({ bannerText }: bannerProps) => {
    return (
        <CommonBannerStyled>
            <Box className="commonBanner">
                <Container fixed>
                    <Typography variant="h1">{bannerText}</Typography>
                    <Image src={assest.roundOne} alt="" width={134} height={118} className="roundOne" />
                    <Image src={assest.roundTwo} alt="" width={258} height={124} className="roundTwo" />
                </Container>
                <Image src={assest.bannerBottom} alt="" width={1681} height={167} className="bannerBottom" />
            </Box>
        </CommonBannerStyled>

    )
}

export default InnerBanner