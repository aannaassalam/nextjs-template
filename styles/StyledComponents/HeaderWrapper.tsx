import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  /* background: ${primaryColors.backGroundColorPurple}; */
  /* box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07); */
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99;
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .hdr_rgt {
    display: flex;
    align-items: center;
    @media(max-width: 899px){
      margin-left: auto;
    }
    
    button {
      padding: 11px 23px;
      min-width: auto;
      font-size: 12px;
      font-weight: 600;
      color: ${primaryColors.backGroundColorPurple};
      line-height: 1;
      min-width: 113px;
      @media(max-width: 599px){
        min-width: auto;
        padding: 8px 10px;
        font-size: 11px;
      }
      p {
        font-size: 12px;
      }
    }
    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      min-width: 10px;
      height: 10px;
    }
    .cart_icon {
      margin-right: 18px;
    }
    &.hdr_rgt_active{
      /* margin-left: auto !important; */
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 15px 0;
    transition: all 0.4s;
    ul {
      display: flex;
      align-items: center;
      margin-left: auto;
      li {
        margin: 0;
        padding: 0 34px 0 0;
        @media(max-width: 1199px){
          padding: 0 20px 0 0;
        }
        button {
          font-size: 14px;
          color: ${primaryColors.white};
          padding: 0;
          min-width: auto;
          background-size: 6px;
          padding-right: 13px;
          font-weight: 400;
          &:hover {
            color: ${primaryColors.primary};
          }
          &.dropdown-icon{
            background: url("/assets/images/menuArrows.svg") transparent no-repeat
            center right; 
          }
        }
        a {
          font-size: 14px;
          color: ${primaryColors.white};
          &:hover {
            color: ${primaryColors.primary};
          }
        }
      }
    }
    .headerSearch_wrap {
      position: relative;
      margin-left: 36px;
      max-width: 242px;
      width: 100%;
      @media(max-width:1199px){
        max-width: 180px;
        margin-left: 20px;
      }
      @media (max-width:599px) {
        max-width: auto;
        width: auto;
        margin-left: auto;
      }
      i {
        position: absolute;
        left: 13px;
        top: 11px;
        @media (max-width:599px) {
          display: none;
        }
      }
      .btnSrchTop{
        display: none;
        @media (max-width:599px) {
          position: static;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          padding: 2px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          min-width: auto;
        }
      }
      .MuiFormControl-root{
        @media (max-width:599px) {
          display: none;
        }
      }
      .MuiInputBase-root {
        position: relative;
        border-radius: 45px;
        background: rgba(255, 255, 255, 0.18);
        border: 0;
        color: ${primaryColors.white};
        max-width: 100%;
        min-width: auto;
        padding: 9px 10px 9px 40px;
        min-height: auto;
        min-width: 460px;
        @media (max-width:1499px) {
          min-width: auto;
        }
        
        .MuiInputBase-input {
          padding: 0;
          color: ${primaryColors.white};
          font-weight: 600;
          &::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.6);
          }

          &:-ms-input-placeholder {
            color: rgba(255, 255, 255, 0.6);
          }

          &::-moz-placeholder {
            color: rgba(255, 255, 255, 0.6);
          }

          &:-moz-placeholder {
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
  }

  .headerLogo {
    width: 236px;
    display: inline-block;
    transition: all 0.4s;
    line-height: 0;
    font-size: 0;
    @media(max-width: 1199px){
      width: 180px;
    }
    @media(max-width: 899px){
      width: 160px;
      margin-left: 20px;
    }
    @media(max-width: 599px){
      width: 110px;
      margin-left: 10px;
    }
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.secondaryFont};
      font-size: 15px;
    }
  }
  .OpenMenuBtns{
    background: rgba(255, 255, 255, 0.9);
    min-width: auto;
    padding: 4px;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    /* display: flex; */
    align-items: center;
    margin: 0;
  }
  .searchHomeTop{
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    padding: 15px;
    background: rgba(0, 0, 0, 1);
    transform: translateY(-100%);
    transition: 0.3s ease-in-out;
    &.active{
      transform: translateY(0);
      transition: 0.3s ease-in-out;
    }
    .MuiInputBase-root {
      border: 0;
      background: rgba(39, 30, 60, 1);
      min-height: 40px;
      flex-direction: row-reverse;
      @media (max-width: 599px) {
          min-width: auto;
        }
      .MuiInputBase-input {
        padding-left: 10px;
        color: rgba(255, 255, 255, 1);
        
        &::placeholder {
          color: #c7c7c7;
          opacity: 0.6;
        }
      }
    }
    .closeBtn_wraps{
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      min-width: auto;
      background: rgba(0, 0, 0, 1);
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding: 4px;
    }
  }
`;
