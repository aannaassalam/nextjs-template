import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const TermsConditionWrapper = styled(Box)`h2 {
    margin-bottom: 25px;
  }
  h3 {
    margin-bottom: 20px;
    line-height: 1.4;
  }
  p{
    /* margin-bottom: 25px; */
    &:last-child{
        margin-bottom: 0;
    }
  }
  ul{
    li{
        /* &:not(:last-child){ */
            margin-bottom: 10px;
        /* } */
    }
  }`;
export const EachBlockWrapper = styled(Box)`
  &:not(:last-child) {
    padding-bottom: 50px;
  }
  
`;
