import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SingleInnerSliderWrapper = styled(Box)`
.wrapper_main{
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid rgba(239, 236, 246, 1);
    background: ${primaryColors.white};
    box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    /* @media(max-width: 1199px){
        flex-direction: column;
    } */
    figure{
        width: 151px;
        border-radius: 10px;
        border-radius: 10px;
        /* border: 1px solid rgba(239, 236, 246, 0.6); */
        box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
        overflow: hidden;
        height: 100%;
        min-height: 208px;
        line-height: 0;
        font-size: 0;
        margin: 0;
        
        @media (max-width: 599px) {
            width: 130px;
            min-height: 180px;
        }
        img{
            width: 100%;
            height: 100%;
            min-height: 208px;
            object-fit: cover;
            @media (max-width: 599px) {
                min-height: 180px;
            }
        }
    }
    .txtWrapper{
        width: calc(100% - 151px);
        padding: 20px;
        @media (max-width: 599px) {
            padding: 15px;
            width: calc(100% - 130px);
        }
        h3{
            color: ${primaryColors.textPrimaryColor};
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
            max-width: 160px;
            line-height: 1.3;
            @media(max-width: 479px){
                font-size: 14px;
            }
        }
        p{
            color: ${primaryColors.mainFontColor};
            font-size: 15px;
            font-weight: 400;
            margin-bottom: 15px;
            @media(max-width: 479px){
                font-size: 12px;
            }
            &.dateTxt{
                display: flex;
                align-items: center;
                color: ${primaryColors.textPrimaryColor};
                font-size: 13px;
                font-weight: 400;
                margin-bottom: 0;
                i{
                    padding-right: 9px;
                    display: inline-flex;
                    align-items: center;
                    svg{
                        path{
                            fill: ${primaryColors.textPrimaryColor};
                        }
                    }
                }
            }

        }
    }
}

`;