import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const RefferenceWrap = styled(Box)`
position: relative;
z-index: 99;
  &.cmn_gap {
    padding-top: 50px !important;
    padding-bottom: 0 !important;
    @media(max-width: 599px){
      padding-top: 30px !important;
    }
  }

  .refference_block {
    border-radius: 10px;
    border: 1px solid ${primaryColors?.colorEFECF6};
    background: ${primaryColors?.white};
    box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
    position: relative;
    .crcl_ball {
      position: absolute;
      left: -100px;
      bottom: -65px;
      z-index: -1;
      pointer-events: none;
      @media(max-width: 1199px){
        max-width: 150px;
        left: -40px;
      }
      @media(max-width: 899px){
        max-width: 100px;
        bottom: -80px;
      }
      svg{
        @media(max-width: 1199px){
        width: 100%;
      }
      }
    }
    .ref_ylw_arrw {
      position: absolute;
      left: -200px;
      bottom: 235px;
      z-index: -1;
      pointer-events: none;
    }
    .why_us_grn_elps {
      position: absolute;
      right: -150px;
      bottom: -150px;
      z-index: -1;
      max-width: 300px;
      pointer-events: none;
    }
  }
  .title_stack {
    padding: 25px 48px;
    border-bottom: 1px solid ${primaryColors?.colorEFECF6};
    @media (max-width:1199px) {
      padding: 20px 20px;
    }
    h2 {
      line-height: 1.5;
      margin-bottom: 10px;
    }
    p {
      color: ${primaryColors?.textPrimaryColor};
      font-size: 16px;
      font-weight: 500;
    }
  }
  .body_block {
    padding: 35px 48px;
    @media (max-width:1199px) {
      padding: 25px 20px;
    }
    h3 {
      margin-bottom: 25px;
      max-width: 217px;
      @media (max-width:1199px) {
        max-width: 100%;
      }
    }
    .MuiChip-root {
      max-width: none;
      word-break: break-word;
      padding: 14px 25px;
      height: auto;
      border-radius: 50px;
      text-align: center;
      white-space: inherit;
      @media(max-width: 599px){
        padding: 10px 20px;
        font-size: 12px;
        line-height: 1;
      }
    }
    .MuiChip-label {
      font-size: 16px;
      font-weight: 400;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      padding: 0;
      @media (max-width:899px) {
        font-size: 13px;
      }
    }
    .each_comp_otr {
      .each_comp {
        padding: 30px 0;
        border-bottom: 1px solid ${primaryColors?.colorEFECF6};
        @media(max-width: 599px){
          padding: 15px 0;
        }
        p {
          margin-bottom: 10px;
          color: ${primaryColors.textPrimaryColor};
          line-height: 1.3;
        }

        &:first-child {
          padding-top: 0;
        }
      }
    }
    .sub_block {
      padding: 30px 30px 120px;
      border-radius: 10px;
      background: ${primaryColors?.blockbgColor};
      @media (max-width:1199px) {
          padding: 20px 20px;
      }
      .each_sub_block {
        > p {
          margin-bottom: 10px;
          color: ${primaryColors.textPrimaryColor};
          line-height: 1.5;
          
        }
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }
  }
  .btn_otr {
    display: flex;
    justify-content: center;
    margin-top: 35px;
    button {
      padding: 10px 30px;
      min-width: auto;
    }
  }
  .body_left{
    height: 100%;
  }
`;
