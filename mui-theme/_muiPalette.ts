/* eslint-disable mui-path-imports/mui-path-imports */
//  MUI pallete colors will be listed here

import { PaletteMode, PaletteOptions } from "@mui/material";

export const primaryColors = {
  primary: "#FEDC65",
  primary1: "#C2A6F4",
  primary_600: "#5871D0",
  secondary: "#FF8EB2",
  secondaryBorder: "#F380A5",
  info: "#BCEBE5",
  infoBorder: "#67C1C2",
  disabledBg: "#DBE0E8",
  textDisabled: "#8F98A8",
  errorMain: "#EB4444",
  errorLight: "#FFECF2",
  white: "#fff",
  black: "#000",
  bodyColor: "#F4F6F8",
  mainFontColor: "#848484",
  textPrimaryColor: "#271E3C",
  borderprimary: "#DBE0E8",
  border_primary: "#DBE0E8",
  warning_color: "#FFEFD7",
  success_color: "#D4FEFF",
  text_success: "#3C8183",
  warning_text: "#6F4F1F",
  deepGreen: "#3c8183",
  lightGreen: "#D4FEFF",
  danger_text: "#9B3858",
  warningMain: "rgba(255, 167, 33, 1)",
  pendingColor: "#FFEFD7",
  pendingTextColor: "#6F4F1F",
  textDanger: "#9B3858",
  dangerColor: "#FFECF2",
  colorFBF5E3: "#FBF5E3",
  colorFEF1EC: "#FEF1EC",
  colorF1EEF5: "#F1EEF5",
  colorF3FBF5: "#F3FBF5",
  colorfcd767: "#fcd767",
  colorEFECF6: "#EFECF6",
  blockbgColor: "#f9f8fd",

  colorDCD7E9: "#DCD7E9",
  color6A559A: "#6A559A",

  cardBgColor: "#f2f2f2",
  // borderprimary:"#DBE0E8",
  chipErrorBg: "#FFECF2",
  chipErrorText: "#9B3858",
  cardShadow: "#0707070F",
  tableshadow: "rgba(7, 7, 7, 0.06)",
  secondaryFont: "#4D4E4E",
  tertiaryFont: "#585858",
  backGroundColorPurple: "#271E3C",
  chipbackgroundColor: "#FEF1EC",
  primaryOrange: "#F56B40",
  boxWhiteBackground: "#fafafa",
  inputColor: "#A1A1A1",
  color7A7A7A: "#7A7A7A",
  colorD9D9D9: "#D9D9D9",
  color271E3C: "#271E3C",
  deepViolet: "#1F1830",
  color75C0BB:"#75C0BB",
  colorECE8F3: "#ECE8F3",
  closeGreyColor: "#E4E4E4",
  colorFEF8E0:"#FEF8E0",
  colorFDE1D9:"#FDE1D9",
  colorE3F2F1:"#E3F2F1",
};

export const pallete = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    background: {
      default: mode === "light" ? "#f5f8fa" : "#000",
      paper: mode === "light" ? "#fff" : "#000"
    },
    //global
    primary: {
      main: primaryColors.primary,
      dark: primaryColors.primary_600
    },
    secondary: {
      main: primaryColors.secondary
    },
    info: {
      main: primaryColors.info
    },
    error: {
      main: primaryColors.errorMain
    },
    warning: {
      main: primaryColors.warningMain
    },

    text: {
      primary: primaryColors.disabledBg
    },
    common: {
      black: "#000",
      white: "#fff"
    }
  };
};
