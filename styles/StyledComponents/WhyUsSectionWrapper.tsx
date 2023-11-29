import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const WhyUsSectionWrap = styled(Box)`
  position: relative;
  .small_orange_ball {
    position: absolute;
    left: 100px;
    top: 170px;
    z-index: -1;
    pointer-events: none;
    @media(max-width: 599px){
        max-width: 100px;
        left: 25px;
        top: 80px;
        width: 20px;
      }
  }
  .why_us_content {
    position: relative;
    z-index: 1;
    .why_us_elps {
      position: absolute;
      right: -100px;
      top: -65px;
      z-index: -1;
      pointer-events: none;
      max-width: 300px;
    }
    .why_us_grn_elps {
      position: absolute;
      left: -100px;
      bottom: -100px;
      z-index: -1;
      max-width: 300px;
      pointer-events: none;
    }
    .crcl_ball {
      position: absolute;
      right: -100px;
      bottom: -65px;
      z-index: -1;
      pointer-events: none;
      @media(max-width: 1199px){
        max-width: 150px;
        bottom: -85px;
      }
      @media(max-width: 599px){
        max-width: 100px;
        right: -25px;
      }
      svg{
        @media(max-width: 1199px){
          width: 100%;
        }
      }
    }
  }
`;
