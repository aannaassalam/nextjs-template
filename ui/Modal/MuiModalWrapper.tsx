import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIconModal from "../Icons/CloseIconModal";

const DialogWrapper = styled(Dialog)`
@media(max-width: 899px){
  padding: 20px;
}
  .closeBtnModal{
    top: 20px;
    right: 20px;
    @media(max-width: 1199px){
      top: 0;
      right: 0;
    }
    &:hover{
      opacity: 0.7;
    }
  }
  .MuiDialogContent-root{
    padding: 20px 60px;
    @media(max-width: 1199px){
      padding: 20px;
    }
  }

`
interface MuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  scroll?: "paper" | "body";
  children: JSX.Element | JSX.Element[];
  title: string;
}

export default function MuiModalWrapper({
  open,
  onClose,
  scroll,
  children,
  title
}: MuiModalWrapperProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DialogWrapper
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          height: "auto",
          borderRadius: "10px",
        }
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>{title}</Typography>
          <IconButton onClick={onClose} autoFocus className="closeBtnModal" disableFocusRipple disableRipple>
            <CloseIconModal />
          </IconButton>
        </Stack>
      </Box>

      <DialogContent>{children}</DialogContent>
    </DialogWrapper>
  );
}
