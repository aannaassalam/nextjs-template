import styles from "@/styles/components/custombuttonoutline.module.scss";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo, useEffect, useState } from "react";
import { ButtonType } from "@/interface/common.interface";
import styled from "@emotion/styled";

const CustomBtn = styled(Button)`
&.button {
  padding: 13px 22px;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid var(--color329691);
  color: var(--color329691);
  min-width: 100px;
 .MuiTypography-caption {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.1;
 
  }
  &:hover {
    color: var(--white) ;
    background-color: var(--black);
    border: 1px solid var(--black);
  }
}

&.buttonOutlined {
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid var(--primaryBlue);
  color: var(--primaryBlue);
}

&.buttonText {
  padding: 10px 20px;
  border-radius: 50px;
  color: var(--primaryBlue);
}

`

const CustomButtonMemo = ({
  children,
  variant = "contained",
  disabled = false,
  onClick,
  color = "inherit",
  size = "medium",
  fullWidth = false,
  endIcon,
  startIcon,
  type,
  loading = false,
}: ButtonType) => {
  const [className, setClassName] = useState("button");

  useEffect(() => {
    if (variant === "text") {
      setClassName("buttonText");
    } else if (variant === "outlined") {
      setClassName("buttonOutlined");
    } else {
      setClassName("button");
    }
  }, [variant]);

  return (
    <CustomBtn
      className={className}
      variant={variant}
      disabled={disabled || loading}
      disableElevation
      onClick={onClick}
      color={color}
      size={size}
      fullWidth={fullWidth}
      endIcon={endIcon}
      startIcon={startIcon}
      type={type}
    >
      {loading && <CircularProgress size={15} color="inherit" />}
      {children}
    </CustomBtn>
  );
};

const CustomButtonOutline = memo(CustomButtonMemo);

export default CustomButtonOutline;
