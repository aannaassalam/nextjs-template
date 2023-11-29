import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HomeTabSectionWrapper = styled(Box)`
  padding: 117px 0 0 0;
  overflow: hidden;
  @media(max-width: 1199px){
    padding: 80px 0 0;
  }
  @media(max-width: 899px){
    padding: 60px 0 0;
  }
  @media(max-width: 599px){
    padding: 40px 0 0;
  }
  .shapeImgOne {
    position: absolute;
    bottom: -120px;
    left: -150px;
    max-width: 400px;
    img {
      width: 100%;
    }
  }
  .shapeImgTwo {
    position: absolute;
    top: 0;
    right: -150px;
    max-width: 400px;
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
    @media (max-width:899px) {
      flex-wrap: wrap;
    }
    .allTabInfo {
      width: calc(100% - 303px);
      padding-left: 30px;
      display: flex;
      @media(max-width: 1199px){
        padding-left: 20px;
      }
      @media (max-width:899px) {
        width: 100%;
        padding: 20px 0 0;
      }
    }
    .tabList {
      position: relative;
      width: 303px;
      border-radius: 10px;
      border: 1px solid rgba(239, 236, 246, 1);
      background: #fff;
      box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      @media (max-width:899px) {
        width: 100%;
      }
      h3 {
        color: ${primaryColors.white};
        font-size: 20px;
        font-weight: 600;
        background: ${primaryColors.primaryOrange};
        padding: 23px 25px;
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
          padding: 17px 25px;
          background: transparent;
          @media (max-width:599px) {
            padding: 12px 20px;
          }
          @media (max-width:899px) {
            width: 100%;
            max-width: 100%;
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
`;
