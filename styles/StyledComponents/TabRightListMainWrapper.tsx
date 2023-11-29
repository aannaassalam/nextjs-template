import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const TabRightListMainWrapper = styled(Box)`
.innerWrap_main{
    position: relative;
    .singleWrap_txt{
        &:not(:last-child){
            margin-bottom: 22px;
        }
        h3{
            color: ${primaryColors.textPrimaryColor};
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            @media(max-width: 599px){
                font-size: 18px;
            }
            
        }
        h4{
            color: ${primaryColors.textPrimaryColor};
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        p{
            color: ${primaryColors.mainFontColor};
            font-size: 15px;
            font-weight: 400;
            margin-bottom: 25px;
            @media(max-width: 599px){
                font-size: 14px;
            }
        }
    }
}

`