import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const FooterWrap = styled(Box)`
  padding: 370px 0 0;
  background: linear-gradient(300deg, #271e3c 0.37%, #6a559a 73.3%);
  overflow-x: hidden;
  position: relative;
  z-index: 9;
  @media(max-width: 1199px){
    padding: 250px 0 0;
  }
  @media(max-width: 899px){
    padding: 150px 0 0;
  }
  @media(max-width: 899px){
    padding: 120px 0 0;
  }
  @media(max-width: 599px){
    padding: 90px 0 0;
  }
  /* &:before {
    position: absolute;
    content: "";
    left: -0%;
    top: -1px;
    width: 100%;
    height: 280px;
    background: url("/assets/images/footerShape1.png") no-repeat center bottom;
    background-size: cover;
  } */
  .shapeOne_ftr {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-height: 300px;
    height: 100%;
    /* object-fit: cover; */
    object-position: bottom;
    @media(max-width: 1199px){
      max-height: 200px;
    }
    @media(max-width: 899px){
      max-height: 120px;
    }
    @media(max-width: 599px){
      max-height: 60px;
    }
  }
  .shapeTwo_ftr {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    max-height: 175px;
    /* object-fit: cover; */
    object-position: bottom;
    pointer-events: none;
  }
  .shapeThree_ftr {
    position: absolute;
    right: 12%;
    top: 40%;
    width: 180px;
    max-height: 58px;
    /* object-fit: cover; */
    object-position: bottom;
    pointer-events: none;
    @media(max-width: 899px){
      width: 80px;
      right: 2%;
    }
    @media(max-width: 599px){
      width: 60px;
      right: 2%;
      top: 56%;
    }

  }
  /* &:after {
    position: absolute;
    content: "";
    left: -3%;
    top: 25px;
    width: 106%;
    height: 300px;
    border-radius: 50% 50% 69% 31% / 90% 57% 43% 10%;
    background: rgba(255, 255, 255, 0.2);
  } */
  .ftr-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 -25px 72px;
    @media(max-width: 899px){
      margin: 0 -15px 50px;
      }
      @media(max-width: 599px){
      margin: 0 -8px 30px;
      }
      @media(max-width: 479px){
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
      }
    li {
      width: auto;
      padding: 0 25px;
      @media(max-width: 899px){
        padding: 0 15px;
      }
      @media(max-width: 599px){
        padding: 0 8px;
      }
      a {
        color: ${primaryColors.white};
        font-size: 14px;
        font-weight: 400;
        &:hover {
          color: ${primaryColors.primary};
        }
        &.active {
          color: ${primaryColors.primary};
        }
      }
    }
  }

  .ftr-wrapper {
    position: relative;
    .footerLogoWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 40px;
      @media(max-width: 899px){
        margin-bottom: 25px;
      }
      .ftr-logo {
        line-height: 0;
        font-size: 0;
        display: inline-block;
        /* max-width: 298px; */
        /* width: 100%; */
        @media(max-width: 899px){
          max-width: 200px;
        }
      }
    }
    .footer_bottm {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0 22px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      @media(max-width: 899px){
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px 0;
      }
      .social-list {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0 -7px;
        @media(max-width: 899px){
        margin-bottom: 20px;
        justify-content: center;
      }
        li {
          padding: 0 7px;
          margin: 0;
          a {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              background: ${primaryColors.black};
            }
          }
        }
      }

      .copy {
        margin-left: auto;
        font-size: 12px;
        color: ${primaryColors.white};
        @media(max-width: 899px){
        width: 100%;
        margin: 3px auto;
        text-align: center;
      }

        a {
          color: ${primaryColors.white};
          &:hover {
            color: ${primaryColors.primary};
          }
        }
      }
    }
  }
`;
