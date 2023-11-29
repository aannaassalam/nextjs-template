import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CommonHeaderWrapper = styled(Box, {
  shouldForwardProp: (data) => data !== "alignMiddleClass"
}) <{ alignMiddleClass: boolean }>`
  text-align: ${({ alignMiddleClass }) => (alignMiddleClass ? "center" : "")};
  margin-bottom: 50px;
  @media (max-width: 899px) {
    margin-bottom: 25px;
  }

  h2 {
    /* margin-top: 20px; */
    text-transform: capitalize;
  }
  .MuiChip-root {
    margin-bottom: 20px;
    border-radius: 100px;
    .MuiChip-label {
      padding: 0 23px;
    }
  }
`;
