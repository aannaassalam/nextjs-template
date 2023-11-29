import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CommonInnerSliderWrapper = styled(Box)`
.wrapperInner{
    position: relative;
    h2{
        text-align: center;
        margin-bottom: 30px;
        @media(max-width: 1199px){
            font-size: 32px;
            margin-bottom: 20px;
        }
        @media(max-width: 599px){
            font-size: 24px;
            margin-bottom: 15px;
        }
    }
    .imgWRapper_oneTw{
        position: absolute;
        bottom: 0;
        right: -120px;
        @media (max-width: 1199px) {
            right: -40px;
            width: 150px;
            bottom: 40px;
        }
        @media (max-width: 899px) {
            right: -20px;
            width: 110px;
            bottom: 20px;
        }
    }
    .imgWRapper_oneSix{
        position: absolute;
        bottom: 0;
        left: -70px;
        @media(max-width: 1199px){
            left: -50px;
            bottom: 15px;
        }
        @media(max-width: 899px){
            left: -45px;
            bottom: -10px;
        }
    }
    .imgWRapper_oneSeven{
        position: absolute;
        top: 100px;
        left: -70px;
        width: 25px;
    }
    .slick-slider{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .slick-slide {
            padding: 10px;
        }
        .slick-list{
            margin: 0 -10px;
            padding-bottom: 30px;
            @media(max-width: 899px){
                padding-bottom: 10px;
            }
        }
        .slick-arrow{
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background-color: rgba(245, 107, 64, 0.1);
            position: static;
            transform: inherit;
            order: 2;
            margin: 0 15px;
            @media(max-width: 899px){
                width: 40px;
                height: 40px;
                margin: 0 10px;
            }
            &:before{
                display: none;
            }
            &.slick-prev{
                background-image: url('/assets/images/arrwsss1.svg');
                background-repeat: no-repeat;
                background-size: 8px;
                background-position: center;
                &:hover{
                    background-image: url('/assets/images/arrwsss3.svg');
                }
            }
            &.slick-next{
                background-image: url('/assets/images/arrwsss2.svg');
                background-repeat: no-repeat;
                background-size: 8px;
                background-position: center;
                &:hover{
                    background-image: url('/assets/images/arrwsss4.svg');
                }
            }
            &:hover{
                background-color: ${primaryColors.primaryOrange};
            }
        }
    }
}

`;