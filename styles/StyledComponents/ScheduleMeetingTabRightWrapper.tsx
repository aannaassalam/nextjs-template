import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ScheduleMeetingTabRightWrapper = styled(Box)`
margin-top: 24px;
.wrapper_meeting{
    position: relative;
    border-radius: 10px;
    border: 1px solid rgba(239, 236, 246, 1);
    background: ${primaryColors.white};
    box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
    padding: 38px 16px;
    figure{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(254, 220, 101, 0.15);
        margin: 0 auto 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 82px;
            height: 82px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    h3{
        max-width: 286px;
        text-align: center;
        margin: 0 auto;
        color: ${primaryColors.textPrimaryColor};
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    button{
        max-width: 287px;
        width: 100%;
        margin: 0 auto;
        font-weight: 600;
    }
}
`