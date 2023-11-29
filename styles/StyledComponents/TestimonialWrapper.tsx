import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const TestimonialWrapper = styled(Box)`
  margin-bottom: -80px;
  position: relative;
  z-index: 99;
  @media(max-width: 899px){
    margin-bottom: -20px;
  }
  &.cmn_gap {
    padding-bottom: 0 !important;
  }
  position: relative;
  z-index: 99;
  .slider_sec {
    position: relative;
    &::after {
      content: "";
      width: 151px;
      height: 145px;
      background-color: ${primaryColors?.info};
      position: absolute;
      right: -50px;
      top: -20px;
      z-index: -1;
      border-radius: 10px;
      @media (max-width: 1199px) {
        right: -20px;
        width: 120px;
        height: 110px;
      }
      @media (max-width: 599px) {
        right: -15px;
        width: 120px;
        height: 110px;
        top: -12px;
      }
    }
    &::before {
      content: "";
      width: 584px;
      height: 646px;
      background: url(${assest?.slider_blur}) no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      left: -240px;
      bottom: -130px;
      z-index: -1;
      border-radius: 10px;
      @media (max-width: 1199px) {
        left: -50px;
        width: 200px;
        height: 200px;
      }
    }
    .small_elps {
      position: absolute;
      right: -100px;
      top: -50px;
      z-index: 1;
      pointer-events: none;
      @media (max-width: 1199px) {
        right: -20px;
      }
      @media (max-width: 599px) {
        right: -10px;
      }
    }
    .slick-slider {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .slick-slide {
        padding: 20px 18px;
        @media (max-width: 1199px) {
          padding: 20px 12px;
        }
      }
      .slick-list {
        margin: -20px -18px;
        padding-bottom: 50px;
        @media (max-width: 1199px) {
          margin: -20px -12px;
        }
        @media (max-width: 899px) {
          padding-bottom: 30px;
        }
      }
      .slick-arrow {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color: rgba(245, 107, 64, 0.1);
        position: static;
        transform: inherit;
        order: 2;
        margin: 0 15px;
        @media (max-width: 899px) {
          width: 40px;
          height: 40px;
          margin: 0 10px;
        }
        &:before {
          display: none;
        }
        &.slick-prev {
          background-image: url("/assets/images/arrwsss1.svg");
          background-repeat: no-repeat;
          background-size: 8px;
          background-position: center;
          &:hover {
            background-image: url("/assets/images/arrwsss3.svg");
          }
        }
        &.slick-next {
          background-image: url("/assets/images/arrwsss2.svg");
          background-repeat: no-repeat;
          background-size: 8px;
          background-position: center;
          &:hover {
            background-image: url("/assets/images/arrwsss4.svg");
          }
        }
        &:hover {
          background-color: ${primaryColors.primaryOrange};
        }
      }
    }
  }
`;

export const TestimonialCardWrapper = styled(Box)`
  padding: 50px 30px;
  border-radius: 10px;
  background: ${primaryColors?.white};
  box-shadow: 0px 14px 40px -18px rgba(0, 0, 0, 0.08);
  @media (max-width: 1199px) {
    padding: 30px 15px;
  }
  i {
    display: flex;
    justify-content: inherit;
    align-items: center;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 15px;
  }
  h4 {
    font-weight: 600;
  }
`;
