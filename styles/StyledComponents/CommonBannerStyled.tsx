import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CommonBannerStyled = styled(Box)`
    .commonBanner{
        background: linear-gradient(to bottom,  rgba(39,30,60,1) 42%,rgba(82,64,123,1) 100%);         
        position: relative;
        .MuiContainer-root{
            position: relative;
            min-height: 530px;
            @media(max-width: 1199px){
                min-height: 400px;
            }
            @media(max-width: 599px){
                min-height: 280px;
            }
        }
        h1{
            color: ${primaryColors?.white};
            font-size: 62px;
            font-weight: 700;
            text-transform: uppercase;
            position: absolute;
            top: 40%;
            transform: translate(0%, -50%);
            left: 10px;
            @media (max-width:1199px) {
                left: 24px;
                font-size: 50px;
            }
            @media (max-width:899px) {
                font-size: 40px;
            }
            @media (max-width:599px) {
                font-size: 30px;
            }
        }
        .bannerBottom{
            width: 100%;
            position: absolute;
            bottom: 0;
        }

        .roundOne{
            position: absolute;
            right: 0;
            top: 24%;
            -webkit-transform: translate(0%, 50%);
            -moz-transform: translate(0%, 50%);
            -ms-transform: translate(0%, 50%);
            transform: translate(0%, 0%);
            @media(max-width: 1199px){
                width: 100px;
            }
            @media(max-width: 599px){
                width: 80px;
            }
        }
        .roundTwo{
            position: absolute;
            right: 20%;
            top: 30%;
            -webkit-transform: translate(0%, 50%);
            -moz-transform: translate(0%, 50%);
            -ms-transform: translate(0%, 50%);
            transform: translate(0%, 0%);
            @media(max-width: 1199px){
                width: 150px;
            }
            @media(max-width: 599px){
                width: 80px;
                top: 40%;
            }
        }
    }
`