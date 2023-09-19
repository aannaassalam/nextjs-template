import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: transparent;
  box-shadow: none;
  z-index: 99;
  &.float_header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .hdr_rgt {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .each_item {
      &:not(:last-child) {
        margin-right: 32px;
      }
      button {
        padding: 0;
        border: 0;
        min-width: auto;
      }
    }
    .avatar_stack {
      flex-wrap: wrap;
      .avatar_image {
        width: 48px;
        height: 48px;
        flex-basis: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        overflow: hidden;
      }
      .avatar_content {
        flex-basis: calc(100% - 48px);
        max-width: calc(100% - 48px);
        padding-left: 12px;
        text-align: left;
        h4 {
          font-size: 16px;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 16px 32px;
    transition: all 0.4s;
    position: relative;
    @media (max-width: 1399px) {
      padding: 15px 0;
    }
  }

  .headerLogo {
    width: 140px;
    display: inline-flex;
    transition: all 0.4s;
    justify-content: center;
    align-items: center;
    @media (max-width: 1399px) {
      width: 120px;
    }
    @media (max-width: 1199px) {
      width: 90px;
    }
  }

  .navbar {
    margin: auto;
  }

  .MuiToolbar-root {
    justify-content: space-between;
    width: 100%;
    > .MuiButtonBase-root {
      &.mobileShow_icon {
        -webkit-order: 3;
        -ms-flex-order: 3;
        order: 3;
        margin: 0 0 0 15px;
        background: url(/assets/images/navOpenBtn_iconOne.svg) no-repeat center;
        -webkit-background-size: 100%;
        background-size: 100%;
        width: 22px;
        height: 17px;
        border-radius: 0;
        padding: 0;
        margin: 0;
      }
      svg {
        display: none;
      }
    }
  }

  .headerWRap {
    @media (max-width: 899px) {
      justify-content: space-between;
      width: 100%;
    }
  }

  .notification_button {
    &.active {
      position: relative;
      &::after {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 2px solid var(--bodyColor);
        background: var(--primaryMain);
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
      }
    }
  }
  .navigate_list {
    display: flex;
    align-items: center;
    li {
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
  .navigate_btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 0;
    background-color: transparent;
    color: ${primaryColors?.mainFontColor};
    font-size: 13px;
    line-height: 1;
    padding: 6px 10px;
    min-width: 104px;
    transition: all 0.3s ease;
    img {
      margin-right: 6px;
    }
    &.active {
      border: 1px solid var(--border-primary);
      background: var(--white);
      color: ${primaryColors?.primary};
      font-weight: 500;
    }
  }
`;
