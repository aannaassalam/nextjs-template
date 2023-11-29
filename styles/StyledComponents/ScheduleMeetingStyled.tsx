import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ScheduleMeetingStyled = styled(Box)`
  .scheduleMeeting {
    border-radius: 10px;
    background: ${primaryColors?.white};
    box-shadow: 0px 21px 25px -9px rgba(0, 0, 0, 0.08);
    padding: 30px 38px;
    margin-bottom: 30px;
    margin-top: -180px;
    position: relative;
    @media(max-width: 1199px){
      padding: 20px 15px;
    }
    @media(max-width: 599px){
      margin-top: -120px;
    }
    .scheduleMeetingUpBtn {
      @media(max-width: 899px){
        margin-top: 10px;
        width: 100%;
      }
      button {
        min-width: 118px;
        padding: 10px 40px;
        @media(max-width: 899px){
          width: 100%;
        }
      }
    }
    .scheduleBtn {
      @media(max-width: 899px){
          width: 100%;
        }
      button {
        padding: 10px 21px;
        min-width: 165px;
        @media(max-width: 899px){
          width: 100%;
        }
      }
    }
    .scheduleMeetingUp {
      padding-bottom: 32px;
      border-bottom: 1px solid ${primaryColors?.colorEFECF6};
      @media (max-width: 1199px) {
        padding-bottom: 20px;
      }
      @media (max-width:899px) {
        flex-wrap: wrap;
      }
    }

    .scheduleMeetingDown {
      @media (max-width: 1199px) {
        padding-top: 20px;
      }
      ul {
        display: flex;
        align-items: center;
        @media (max-width: 1199px) {
          width: 100%;
        }
        @media (max-width: 899px) {
          flex-wrap: wrap;
          justify-content: center;
          margin: -5px -10px;
        }
        li {
          width: auto;
          @media(max-width: 899px){
              padding: 0 10px;

            }
          &:not(:last-child) {
            margin-right: 32px;
            @media(max-width: 899px){
              margin: 5px 0;

            }
          }
          a {
            color: ${primaryColors?.textPrimaryColor};
            font-size: 14px;
            font-weight: 400;
            &:hover {
              color: ${primaryColors?.primary};
            }
          }
        }
      }

      .scheduleMeetingDownTxt {
        padding-top: 30px;
        @media (max-width: 1199px) {
          width: 100%;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 899px) {
          flex-wrap: wrap;
        }
        p {
          color: ${primaryColors?.textPrimaryColor};
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 13px;
          @media (max-width: 1199px) {
            margin-bottom: 0;
          }
          @media (max-width: 899px) {
            width: 100%;
            margin-bottom: 5px;
            text-align: center;
          }
        }
      }
    }
    .imgWrap_company{
      @media (max-width: 599px) {
        max-width: 60px;
        width: 100%;
      }
    }
    .aiaTxt {
      padding-left: 20px;
      @media(max-width: 599px){
        padding-left: 10px;
      }
      h2 {
        color: ${primaryColors?.backGroundColorPurple};
        font-size: 45px;
        font-weight: 700;
        margin-bottom: 10px;
        @media(max-width: 899px){
          font-size: 30px;
        }
        @media(max-width: 599px){
          font-size: 24px;
        }
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          svg {
            margin-right: 4px;
          }
          p {
            color: ${primaryColors?.mainFontColor};
            font-size: 14px;
            font-weight: 400;
            @media(max-width: 599px){
              font-size: 12px;
            }
          }
          &:not(:last-child) {
            margin-right: 20px;
            @media(max-width: 599px){
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  .aiaTxtInput {
    width: 100%;
    min-width: 427px;
    @media (max-width: 599px) {
      min-width: auto;
    }
    .MuiInputBase-root {
      border: 0;
      background: rgba(39, 30, 60, 0.05);
      min-height: 40px;
      flex-direction: row-reverse;
      @media (max-width: 599px) {
          min-width: auto;
        }
      .MuiInputBase-input {
        padding-left: 10px;
        
        &::placeholder {
          color: rgba(39, 30, 60, 1);
          opacity: 0.6;
        }
      }
    }
  }
  .titleTwTxt {
    padding-right: 100px;
    @media (max-width: 1199px) {
      padding-right: 40px;
    }
  }
  button {
    & span {
      color: ${primaryColors.textPrimaryColor} !important;
    }
  }
`;
