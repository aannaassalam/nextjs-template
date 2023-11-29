import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CominSoonWrapper = styled(Box)`
  .commonBanner {
    .coming_inner {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    background: linear-gradient(
      to bottom,
      rgba(39, 30, 60, 1) 42%,
      rgba(82, 64, 123, 1) 100%
    );
    position: relative;
    .MuiContainer-root {
      position: relative;
      min-height: 530px;
      @media (max-width: 1199px) {
        min-height: 400px;
      }
      @media (max-width: 599px) {
        min-height: 280px;
      }
    }
    .logo_wrap {
      margin: 0 0 35px;
      margin-left: -15px;
      text-align: center;

      @media (max-width: 599px) {
        img {
          width: 350px;
        }
      }

      @media (max-width: 399px) {
        img {
          width: 280px;
        }
      }
    }
    .text {
      color: ${primaryColors.white};
      font-size: 15px;
      text-align: center;
      margin: 0 0 20px;
    }
    .btn_holder {
      text-align: center;
      display: flex;
      justify-content: center;
    }
    h1 {
      text-align: center;
      color: ${primaryColors?.white};
      font-size: 62px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0 0 15px;

      @media (max-width: 1199px) {
        font-size: 50px;
      }
      @media (max-width: 899px) {
        font-size: 40px;
      }
      @media (max-width: 599px) {
        font-size: 30px;
      }
    }
    .bannerBottom {
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    .roundOne {
      position: absolute;
      left: 0;
      top: 24%;
      -webkit-transform: translate(0%, 50%);
      -moz-transform: translate(0%, 50%);
      -ms-transform: translate(0%, 50%);
      transform: translate(0%, 0%);
      @media (max-width: 1199px) {
        width: 100px;
      }
      @media (max-width: 599px) {
        width: 80px;
      }
    }
    .roundTwo {
      position: absolute;
      right: 0;
      bottom: 15%;
      -webkit-transform: translate(0%, 50%);
      -moz-transform: translate(0%, 50%);
      -ms-transform: translate(0%, 50%);
      transform: translate(0%, 0%);
      @media (max-width: 1199px) {
        width: 150px;
      }
      @media (max-width: 599px) {
        width: 80px;
        top: 40%;
      }
    }
    .roundThree {
      position: absolute;
      right: 0;
      top: 20%;
    }
  }
`;
