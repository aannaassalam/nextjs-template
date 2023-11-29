import { CommonHeaderProps } from "@/interface/commonAll.interfaces";
import { CommonHeaderWrapper } from "@/styles/StyledComponents/CommonHeaderWrapper";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

export default function CommonHeader({
  chipName,
  headerTitle,
  alignMiddle = false
}: CommonHeaderProps) {
  const alignMiddleClass = alignMiddle;
  return (
    <CommonHeaderWrapper alignMiddleClass={alignMiddleClass}>
      <Chip label={chipName} />
      <Typography variant="h2">{headerTitle}</Typography>
    </CommonHeaderWrapper>
  );
}
