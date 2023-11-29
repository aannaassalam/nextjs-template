import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const UpcomingwebinarSecWrapper = styled(Box)`
.wrapper_inner{
    position: relative;
    border-radius: 10px;
    border: 1px solid rgba(239, 236, 246, 1);
    background: ${primaryColors.white};
    box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
    padding: 18px 16px 50px;
    @media(max-width: 899px){
    padding: 18px 10px;
    }
    h3{
        color: ${primaryColors.textPrimaryColor};
        font-size: 18px;
        font-weight: 600;
        text-transform: capitalize;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        margin-bottom: 12px;
    }
    .all_wrapperList{
        position: relative;
        .singleList{
            &:not(:last-child){
                margin-bottom: 16px;
            }
        }
    }
    .wrapper_list{
        display: flex;
        align-items: center;
        .dateTxtWrap{
            background: ${primaryColors.cardBgColor};
            border-radius: 10px;
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            @media (max-width: 599px) {
                width: 60px;
                height: 60px;
            }
            span{
                color: ${primaryColors.textPrimaryColor};
                font-size: 18px;
                font-weight: 600;
                text-transform: capitalize;
                display: inline-block;
                text-align: center;
                line-height: 1.2;
                @media (max-width: 599px) {
                    font-size: 16px;
                }
            }
        }
        .txtWrapper_right{
            width: calc(100% - 72px);
            padding-left: 17px;
            @media (max-width: 599px) {
                width: calc(100% - 72px);
                padding-left: 10px;
            }
            h4{
                color: ${primaryColors.mainFontColor};
                font-size: 15px;
                font-weight: 400;
                margin-bottom: 4px;
               
            }
            p{
                display: flex;
                align-items: center;
                color: ${primaryColors.primaryOrange};
                font-size: 13px;
                font-weight: 400;
                i{
                    padding-right: 6px;
                    display: inline-flex;
                }
            }
        }
    }
}

`