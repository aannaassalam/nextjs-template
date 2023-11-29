import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ValuedDocumentsStyled = styled(Box)`
  padding-top: 50px;
  position: relative;

  .valuedDocumentshadow{
    position: absolute;
    left: 10%;
    bottom: -50%;
    z-index: 1;
  }

  .document_body {
    padding: 30px 48px;
    @media (max-width:899px) {
      padding: 20px 20px;
    }
    @media (max-width:599px) {
      padding: 15px;
    }
    h3{

    }
  }
  .document_blck {
    border-radius: 10px;
    border: 1px solid ${primaryColors?.colorEFECF6};
    background: ${primaryColors?.white};
    box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 9;
    h3{
        margin-bottom: 30px;
        @media (max-width:599px) {
          margin-bottom: 20px;
        }
    }
  }
`;
