/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { primaryColors } from "@/themes/_muiPalette";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// eslint-disable-next-line import/order
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/system";

import React, { forwardRef } from "react";

import EyeClose from "../Icons/EyeClose";
import EyeOpen from "../Icons/EyeOpen";

const InputWrap = styled(TextField as any)`
  .MuiInputBase-adornedEnd {
    height: auto;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: var(--white);
    border-radius: 5px;
    padding: 11px 16px;
    min-height: 60px;
    border: 1px solid ${primaryColors?.inputColor};
    background: ${primaryColors?.white};
    /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06); */
    min-width: 300px;
    @media (max-width: 600px) {
      padding: 5px 10px;
    }

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
      color: ${primaryColors?.textPrimaryColor};
      border: 0;
      padding: 0 0;
      font-size: 16px;
      font-weight: 400;
      color: ${primaryColors?.textPrimaryColor};
      &::placeholder {
        color: ${primaryColors?.textPrimaryColor};
        opacity: 1;
      }
      &:focus {
        border: 0;
        background: transparent;
      }
    }
    textarea {
      height: 125px !important;
      padding: 20px 10px 20px 51px;
      @media (max-width: 600px) {
        padding: 20px 10px 20px 30px;
      }
    }
    &.Mui-error {
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        border-color: ${primaryColors?.inputColor};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
      /* border-color: var(--primaryD3D7DF); */
    }
    #outlined-adornment-password {
      border: 0;
      padding: 0;
      height: 39px;
      font-size: 16px;
      &::placeholder {
        color: ${primaryColors?.textPrimaryColor};
        opacity: 1;
      }
    }
    button {
      background-color: transparent;
      color: var(--textPrimaryColor);
      padding: 0;
      &:focus {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      &:hover {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      img {
        position: static !important;
        transform: inherit !important;
        top: 0;
        left: 0;
        width: 20px;
      }
      svg {
        font-size: 20px;
      }
    }
  }

  &.signUpButton {
    width: 100%;
    padding: 23px 0;
  }

  .MuiFormLabel-root {
    color: ${primaryColors?.inputColor};
    font-size: 13px;
    font-weight: 400;
    left: 3px;
    top: 4px;
    &.MuiInputLabel-shrink {
      transform: translate(14px, 2px) scale(1);
      color: ${primaryColors?.inputColor};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  &.vendorAuth {
    .MuiInputBase-root {
      border-color: ${primaryColors?.colorD9D9D9};
      border-radius: 10px;
      min-width: 260px;
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        margin-top: 10px;
        &::placeholder {
          color: ${primaryColors?.color7A7A7A};
          font-size: 16px;
          font-weight: 400;
          opacity: 1;
        }
        &:focus {
          border: 0;
          background: transparent;
        }
      }
    }

    .MuiInputAdornment-root {
      display: none;
    }

    .MuiFormLabel-root {
      font-weight: 700;
      color: ${primaryColors?.color7A7A7A};
      margin-bottom: 5px;
    }
  }

  &.vendorAuthEye {
    .MuiInputAdornment-root {
      display: flex;
    }
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  adorMentIcon?: JSX.Element;
  startAdormentIcon?: boolean;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  (
    { isPassword = false, adorMentIcon, startAdormentIcon = false, ...others },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <InputWrap
        fullWidth
        variant="outlined"
        type={isPassword ? (showPassword ? "text" : "password") : others?.type}
        {...others}
        InputProps={{
          ...others.InputProps,
          inputRef: ref,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                disableRipple
              >
                {showPassword ? <EyeClose /> : <EyeOpen />}
              </IconButton>
            </InputAdornment>
          ) : startAdormentIcon ? null : (
            <InputAdornment position="end">
              <IconButton disableRipple>{adorMentIcon}</IconButton>
            </InputAdornment>
          ),
          startAdornment: startAdormentIcon && (
            <InputAdornment position="end">
              <IconButton disableRipple>{adorMentIcon}</IconButton>
            </InputAdornment>
          )
        }}

      />
    );
  }
);

export default InputFieldCommon;
