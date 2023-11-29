import { newsLetterTxt } from "@/interface/commonAll.interfaces";
import { CommonRightNewsLetterWrapper } from "@/styles/StyledComponents/CommonRightNewsLetterWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';

export default function CommonRightNewsLetter({ title, paraTxt }: newsLetterTxt) {
    return (
        <CommonRightNewsLetterWrapper>
            <Box className="newsLetter_mainWrap">
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='body1'>{paraTxt}</Typography>
                <Box className="formWrapper_main">
                    <InputFieldCommon placeholder="Email address" />
                    <CustomButtonPrimary variant="contained" color="primary">
                        <Typography variant="caption">Submit</Typography>
                    </CustomButtonPrimary>
                </Box>
            </Box>
        </CommonRightNewsLetterWrapper>
    )
}
