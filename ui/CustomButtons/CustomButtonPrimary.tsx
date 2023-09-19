import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;

  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    p {
      color: var(--mainFontColor);
      /* color: var(--black); */
    }
    img {
      filter: contrast(0);
    }
  }
  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    p {
      color: ${primaryColors?.black};
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    color: ${primaryColors?.white};
  }
  span {
    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  /* img {
    width: 24px;
  } */
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
