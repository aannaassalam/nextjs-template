import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const CommonRightNewsLetterWrapper = styled(Box)`
margin-top: 24px;
.newsLetter_mainWrap{
    position: relative;
    border-radius: 10px;
    border: 1px solid rgba(239, 236, 246, 1);
    background: ${primaryColors.white};
    box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
    padding: 18px 16px 28px;
    h3{
        color: ${primaryColors.textPrimaryColor};
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 6px;
        p{
            color: ${primaryColors.mainFontColor};
            font-size: 13px;
            font-weight: 400;
        }
    }
    .formWrapper_main{
        border-top: 1px solid ${primaryColors.cardBgColor};
        margin-top: 16px;
        padding-top: 20px;
        .MuiInputBase-root{
            border: 0;
            background: rgba(39, 30, 60, 0.05);
            min-height: 40px;
            margin-bottom: 20px;
            min-width: auto;
            .MuiInputBase-input{
                &::placeholder {
                    color: ${primaryColors?.textPrimaryColor};
                    opacity: 0.6;
                }
            }
        }
        button{
            max-width: 105px;
            margin: 0 auto;
            min-width: auto;
            min-height: 40px;
            height: 40px;
        }
    }
}
`