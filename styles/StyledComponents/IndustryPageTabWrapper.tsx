import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const IndustryPageTabWrapper = styled(Box)`
  padding: 117px 0 0 0;
  overflow: hidden;
  margin-bottom: -80px;
  position: relative;
  z-index: 99;
  @media(max-width: 1199px){
    padding: 80px 0 0;
  }
  @media(max-width: 899px){
    padding: 60px 0 0;
    margin-bottom: -40px;
  }
  @media(max-width: 599px){
    padding: 40px 0 10px;
    margin-bottom: 0;
  }
  .wrapper_mainTab{
    position: relative;
    z-index: 1;
  }
  .shapeImgOne {
    position: absolute;
    top: 280px;
    left: -150px;
    max-width: 400px;
    img {
      width: 100%;
    }
  }
  .shapeImgTwo {
    position: absolute;
    bottom: 80px;
    right: -150px;
    max-width: 100px;
    @media(max-width: 1199px){
      max-width: 80px;
      right: -100px;
    }
    @media(max-width: 899px){
      max-width: 40px;
      right: 40px;
      bottom: -20px;
    }
    img {
      width: 100%;
    }
  }
  .mainInner {
    position: relative;
  }
  .mainInner_wrap {
    position: relative;
    display: flex;
    align-items: flex-start;
    @media(max-width: 899px){
      flex-wrap: wrap;
    }
    .allTabInfo {
      width: calc(100% - 360px);
      padding-left: 30px;
      @media(max-width: 1199px){
        padding-left: 20px;
      }
      @media(max-width: 899px){
        width: 100%;
        padding: 0;
      }
    }
    .tabList {
      position: relative;
      max-width: 360px;
      width: 100%;
      border-radius: 10px;
      border: 1px solid rgba(239, 236, 246, 1);
      background: #fff;
      box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      height: auto;
      @media(max-width: 899px){
        max-width: 100%;
        margin-bottom: 20px;
      }
      h3 {
        color: ${primaryColors.white};
        font-size: 20px;
        font-weight: 600;
        background: linear-gradient(200deg, #271E3C -34.41%, #6A559A 74.37%, #6A559A 74.37%);

;
        padding: 18px 25px;
        @media (max-width:599px) {
          padding: 15px 20px;
          font-size: 18px;
        }
      }
      .MuiTabs-root {
        border: 0;
        .MuiButtonBase-root {
          color: rgba(132, 132, 132, 1);
          font-size: 15px;
          font-weight: 400;
          text-align: left;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 14px 25px;
          background: transparent;
          @media(max-width: 899px){
            max-width: 100%;
            width: 100%;
          }
          @media (max-width:599px) {
            padding: 12px 20px;
          }
          &:not(:last-child) {
            border-bottom: 1px solid rgba(239, 236, 246, 1);
          }
          &:hover {
            background: transparent;
            color: ${primaryColors.backGroundColorPurple};
          }
          &.Mui-selected {
            background: transparent;
            color: ${primaryColors.backGroundColorPurple};
            font-weight: 500;
          }
        }
      }
      .MuiTabs-indicator {
        display: none;
      }
    }
  }
`