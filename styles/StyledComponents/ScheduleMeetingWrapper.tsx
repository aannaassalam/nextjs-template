import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ScheduleMeetingWrapper = styled(Box)`
    margin-top: 70px;
    .wrapper_Top{
        @media(max-width: 899px){
            flex-wrap: wrap;
            width: 100%;
        }
        h2{
             @media(max-width: 899px){
                padding-right: 0;
                margin-bottom: 10px;
                width: 100%;
             }
        }
    }
    .scheduleMeetingUpBtn{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    
`