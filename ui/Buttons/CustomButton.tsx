// import styles from "@/styles/components/custombutton.module.scss";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo, useEffect, useState } from "react";
import { ButtonType } from "@/interface/common.interface";
import { styled } from "@mui/material";

const CustomBtn = styled(Button)`
&.button{
  padding: 13px 22px;
  border-radius: 50px;
  background-color: var(--color747FF4);
  border: 1px solid var(--color747FF4);
  color: var(--white);
  min-width: 180px;
  .MuiTypography-caption {
    color: var(--white);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.1;
  }
  &:hover{
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
  loading = false
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

const CustomButton = memo(CustomButtonMemo);

export default CustomButton;
