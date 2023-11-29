import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CompanyAboutStyled = styled(Box)`
    position: relative;
    z-index: 9;
    margin-bottom: 40px;
    .companyAbtCard{
        /* min-width: 274px; */
        border-radius: 10px;
        border: 1px solid #EFECF6;
        background: #FFF;
        box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
        padding: 25px 26px;
        /* margin-bottom: 46px; */
        height: 100%;
        transition: all ease-out 0.4s;
        /* &:not(:last-child){
            margin-right: 15px;
        } */
        @media(max-width: 599px){
            padding: 20px 15px;
        }
        &:hover{
            background: ${primaryColors?.colorfcd767};
            transition: all ease-out 0.4s;
        }
        .companyAbtCardIcon{
            margin-right: 15px;
            .iconClr{
                width: 48px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
        }
        .companyAbtCardTxt{
            h4{
                color: ${primaryColors?.black};
                font-size: 16px;
                font-weight: 600;
            }
            span{
                color: ${primaryColors?.mainFontColor};
                font-size: 15px;
                font-weight: 400;
            }
        }
    }
`