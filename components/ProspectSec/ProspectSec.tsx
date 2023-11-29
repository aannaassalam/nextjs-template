import { mediaUrl } from "@/api/endpoints";
import { HomepageSection4 } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const PropspectWrapper = styled(Box)`
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    width: 50%;
    height: 100%;
    border-radius: 10px;
    background: ${primaryColors?.boxWhiteBackground};
    position: absolute;
    left: 50px;
    top: 0;
    z-index: -1;
    pointer-events: none;
    @media (max-width: 1199px) {
      left: 15px;
    }
    @media (max-width: 899px) {
      left: 0;
      width: 100%;
    }
  }
  &::before {
    content: "";
    width: 30%;
    height: 100%;
    background: linear-gradient(
      200deg,
      #271e3c -34.41%,
      #6a559a 74.37%,
      #6a559a 74.37%
    );
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
    pointer-events: none;
    @media (max-width: 899px) {
      display: none;
    }
  }

  .arrow_spiral {
    position: absolute;
    right: 100px;
    top: 30px;
    z-index: -1;
    pointer-events: none;
  }
  .prospect_txt {
    > * {
      margin-bottom: 30px;
      @media(max-width: 599px){
        margin-bottom: 15px;
      }
    }
    h2{
      @media(max-width: 1199px){
        font-size: 35px;
      }
      @media(max-width: 899px){
        font-size: 30px;
      }
      @media(max-width: 599px){
        font-size: 24px;
        margin-bottom: 15px;
      }
    }
  }
  .prospect_fig {
    position: relative;
    .dots_prospect {
      position: absolute;
      right: -110px;
      bottom: -30px;
      z-index: -1;
      pointer-events: none;
    }
    figure {
      box-shadow: 0px 43px 49px -36px rgba(0, 0, 0, 0.21);
      height: 520px;
      border-radius: 21px;
      overflow: hidden;
      @media(max-width: 1199px){
        height: 400px;
      }
      @media(max-width: 899px){
        height: auto;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

interface ProspectProps {
  data: HomepageSection4
}

export default function ProspectSec({ data }: ProspectProps) {
  return (
    <PropspectWrapper className="cmn_gap">
      <Image
        src={assest?.arrow_spiral}
        alt="image"
        width={100}
        height={90}
        className="arrow_spiral"
      />
      <Container fixed>
        <Grid container spacing={{ lg: 10, md: 4, xs: 4 }} alignItems="center">
          <Grid item md={5} xs={12}>
            <Box className="prospect_txt">
              <CommonHeader
                chipName={data?.heading}
                headerTitle={data?.sub_heading}
              />
              <Typography style={{ whiteSpace: "pre-wrap" }}>
                {data?.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={7} xs={12}>
            <Box className="prospect_fig">
              <Image
                src={assest?.dots_prospect}
                alt="image"
                width={180}
                height={60}
                className="dots_prospect"
              />
              <figure>
                <Image
                  src={mediaUrl(data?.image, "home-cms")}
                  alt="image"
                  width={1800}
                  height={1500}
                />
              </figure>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PropspectWrapper>
  );
}
