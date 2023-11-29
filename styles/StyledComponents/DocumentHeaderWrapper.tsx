import { primaryColors } from "@/themes/_muiPalette";
import { Stack, styled } from "@mui/system";

export const DocumentHeaderWrapper = styled(Stack)`
  padding: 22px 48px;
  border-radius: 10px 10px 0px 0px;
  background: linear-gradient(
    200deg,
    #271e3c -34.41%,
    #6a559a 74.37%,
    #6a559a 74.37%
  );
  @media (max-width:1199px) {
      padding: 20px 20px;
    }
  @media (max-width:899px) {
      padding: 15px;
    }
  h2{
    color: ${primaryColors?.white};
    margin-bottom: 10px;
    @media (max-width:1199px) {
        font-size: 32px;
    }
    @media (max-width:899px) {
        font-size: 24px;
    }
    @media (max-width:599px) {
        font-size: 20px;
    }
  }
  p {
    color: ${primaryColors?.white};
  }
  .blur_btn {
    padding: 8px 20px;
    height: 46px;
    border-radius: 50px;
    background: rgb(255, 255, 255, 0.1);
    color: ${primaryColors?.white};
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    @media (max-width:899px) {
        font-size: 14px;
    }
  }
  .header_left{
    @media (max-width:599px) {
    width: 100%;
    margin-bottom: 10px;
    }
  }
  .header_rgt{
    @media (max-width:599px) {
    width: 100%;
    }
    button{
        @media (max-width:599px) {
        width: 100%;
        }
    }
  }
`;