import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const CommonIndustyTableWrapper = styled(Box)`
.mainTable_list{
    position: relative;
    padding-top: 40px;
    @media (max-width: 1199px) {
        padding-top: 20px;
    }
    .MuiPaper-root{
        box-shadow: none;
        border: 0;
        @media(max-width: 599px){
            overflow-y: auto;
        }
        .MuiTable-root{
            @media(max-width: 599px){
                width: 580px;
            }
            th{
                padding: 10px 20px 10px 0;
                color: ${primaryColors.textPrimaryColor};
                border-bottom: 1px solid ${primaryColors.colorEFECF6};
                font-size: 13px;
                font-weight: 600;
            }
            td{
                padding: 10px 0 10px;
                color: ${primaryColors.mainFontColor};
                border-bottom: 1px solid ${primaryColors.colorEFECF6};
                font-size: 13px;
                font-weight: 400;
                @media (max-width:899px) {
                        padding: 0;
                }
                ul{
                    li{
                        padding: 10px 0;
                        &:not(:last-child){
                            border-bottom: 1px solid ${primaryColors.colorEFECF6};
                        }
                    }
                }
            }
        }
    }
}
`