import assest from "@/json/assest";
// import { BannerWrap } from "@/styles/StyledComponents/BannerWrap";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";

export const BannerWrap = styled(Box)`
  padding: 150px 0 250px;
  background: linear-gradient(180deg, #271e3c 0%, #52407b 100%);
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 1199px) {
    padding: 150px 0;
  }
  @media (max-width:991px) {
    min-height: 400px; 
  }
  .banner_shape {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    @media(max-width: 1199px){
      width: 100%;
      height: auto;
      bottom: 0;
      top: inherit;
    }
  }
  .banner_txt {
    max-width: 1030px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    .orange_arrw {
      position: absolute;
      left: -10px;
      top: -70px;
      z-index: -1;
      pointer-events: none;
      @media(max-width: 1199px){
        width: 80px;
        left: 10px;
        top: -50px;
      }
      @media(max-width: 599px){
        width: 60px;
        left: 10px;
        top: -70px;
      }
    }
    .banner_crcl {
      position: absolute;
      right: -120px;
      top: -80px;
      z-index: -1;
      pointer-events: none;
      @media(max-width: 1199px){
        right: -40px;
        width: 120px;
      }
      @media(max-width: 1199px){
        right: -20px;
        width: 80px;
      }
    }
    .banner_dot {
      position: absolute;
      right: -150px;
      bottom: -40px;
      z-index: -1;
      pointer-events: none;
      @media(max-width: 1199px){
        right: -40px;
        width: 120px;
        bottom: -50px;
      }
      @media(max-width: 899px){
        right: -40px;
        width: 80px;
      }
    }
    h1 {
      color: ${primaryColors?.white};
      text-transform: uppercase;
      margin-bottom: 15px;
      @media(max-width: 1199px){
        font-size: 50px;
      }
      @media(max-width: 991px){
        font-size: 35px;
      }
      @media(max-width: 899px){
        font-size: 30px;
      }
      @media(max-width: 599px){
        font-size: 25px;
      }
    }
    p {
      color: ${primaryColors?.white};
      font-size: 15px;
    }
  }
  .banner_search {
    margin: 35px auto 0;
    max-width: 804px;
    position: relative;
    border-radius: 30px;
    overflow-y: visible;
    .MuiFormControl-root {
      .MuiInputBase-root {
        padding-left: 0;
        border-radius: 45px;
        background: rgba(255, 255, 255, 0.18);
        height: 55px;
        input {
          border: 0;
          max-width: 90%;
        }
      }
    }
  }
`;

interface bannerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Banner({ title, children, subtitle }: bannerProps) {
  return (
    <BannerWrap>
      <Image
        src={assest?.banner_shape}
        alt="banner_shape"
        width={3200}
        height={1400}
        className="banner_shape"
      />
      <Container fixed>
        <Box className="banner_txt">
          <Image
            src={assest?.orange_arrw}
            alt="orange_arrw"
            width={130}
            height={130}
            className="orange_arrw"
          />
          <Image
            src={assest?.banner_crcl}
            alt="banner_crcl"
            width={135}
            height={115}
            className="banner_crcl"
          />
          <Image
            src={assest?.banner_dot}
            alt="banner_dot"
            width={180}
            height={60}
            className="banner_dot"
          />
          <Typography variant="h1">{title}</Typography>
          <Typography>{subtitle}</Typography>
          <Box className="banner_btm">{children}</Box>
        </Box>
      </Container>
    </BannerWrap>
  );
}
