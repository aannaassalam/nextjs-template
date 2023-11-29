import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

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
  .banner_shape {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
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
    }
    .banner_crcl {
      position: absolute;
      right: -120px;
      top: -80px;
      z-index: -1;
      pointer-events: none;
    }
    .banner_dot {
      position: absolute;
      right: -150px;
      bottom: -40px;
      z-index: -1;
      pointer-events: none;
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
    }
    p {
      color: ${primaryColors?.white};
      font-size: 15px;
    }
  }
  .banner_search {
    margin: 35px auto 0;
    max-width: 804px;
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