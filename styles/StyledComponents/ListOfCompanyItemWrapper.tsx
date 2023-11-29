import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ListOfCompanyItemWrapper = styled(Box)`
.wrapper_txtList{
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid ${primaryColors.colorEFECF6};
    background: #FFF;
    box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
    padding: 20px;
    @media(max-width: 1199px){
        padding: 10px;
    }
    @media(max-width: 599px){
        flex-wrap: wrap;
    }
    .wrapper_logoImg{
        width: 129px;
        height: 129px;
        border-radius: 10px;
        border: 1px solid ${primaryColors.colorEFECF6};
        background: #FFF;
        @media(max-width: 599px){
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            margin-bottom: 15px;
        }
        figure{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            padding: 4px;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
    .wrapper_info{
        width: calc(100% - 129px);
        padding-left: 23px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media(max-width: 1199px){
            flex-wrap: wrap;
        }
        @media(max-width: 899px){
            padding-left: 15px;
        }
        @media(max-width: 599px){
            padding-left: 0;
            width: 100%;
        }
        .infoTxts{
            position: relative;
            @media(max-width: 599px){
                width: 100%;
            }
            h4{
                color: ${primaryColors.textPrimaryColor};
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 6px;
            }
            .rating{
                display: flex;
                align-items: center;
                margin-bottom: 6px;
                p{
                    color: ${primaryColors.mainFontColor};
                    font-size: 15px;
                    font-weight: 400;
                    padding-left: 4px;
                }
                span{
                    color: ${primaryColors.primaryOrange};
                    font-size: 12px;
                }
            }
            .locationTxts{
                display: flex;
                align-items: center;
                color: ${primaryColors.mainFontColor};
                font-size: 15px;
                font-weight: 400;
                i{
                    display: inline-flex;
                    align-items: center;
                    line-height: 0;
                    font-size: 0;
                }
            }
        }
    }
    .checkBox_btnWRap{
        display: flex;
        align-items: center;
        @media(max-width: 1199px){
            flex-wrap: wrap;
        }
        .checkonly{
            padding-right: 60px;
            @media(max-width: 1199px){
                padding-right: 25px;
            }
            @media(max-width: 599px){
                padding: 0;
                margin: 10px 0;
            }
        }
        span{
            font-size: 12px;
            font-weight: 600;
            color: ${primaryColors.textPrimaryColor}
        }
    }
    .btnWraps{
        @media(max-width: 899px){
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        @media(max-width: 479px){
            flex-wrap: wrap;
        }
        button{
            @media(max-width: 899px){
                max-width: 48%;
                width: 100%;
                min-width: auto;
            }
            @media(max-width: 479px){
                width: 100%;
                margin: 5px 0;
                max-width: 100%;
            }
            &:not(:last-child){
                margin-bottom: 9px;
                @media(max-width: 899px){
                    margin: 0;
                }
            }
            padding: 10px 30px;
        }
    }
}

`