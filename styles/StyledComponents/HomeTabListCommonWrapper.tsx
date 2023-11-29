import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HomeTabListCommonWrapper = styled(Box)`
  height: 100%;
  .wrapper_main {
    position: relative;
    border-radius: 10px;
    border: 1px solid rgba(239, 236, 246, 1);
    background: #fff;
    padding: 30px 23px;
    height: 100%;
    cursor: pointer;
    @media(max-width: 1199px){
      padding: 22px 15px;
    }
    h4 {
      text-align: center;
      color: ${primaryColors.backGroundColorPurple};
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
      text-transform: capitalize;
    }
    .startRating {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      .rating {
        span {
          font-size: 12px;
          color: rgba(245, 107, 64, 1);
        }
      }
      p {
        color: rgba(132, 132, 132, 1);
        font-size: 15px;
        font-weight: 400;
        padding-left: 6px;
      }
    }
    .logoImg {
      display: flex;
      align-items: center;
      justify-content: center;
      figure {
        margin: 0;
        line-height: 0;
        font-size: 0;
      }
    }
  }
`;
