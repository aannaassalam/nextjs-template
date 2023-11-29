import { upcominWebinrProp } from '@/interface/commonAll.interfaces';
import { UpcomingwebinarSecWrapper } from '@/styles/StyledComponents/UpcomingwebinarSecWrapper';
import IconDateOrange from '@/ui/Icons/IconDateOrange';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';


export default function SingelWebinerList({ dateTxt, titleTxt, dateFormat }: upcominWebinrProp) {
    return (
        <UpcomingwebinarSecWrapper>
            <Box className="wrapper_list">
                <Box className="dateTxtWrap"><Typography variant='caption'>{dateTxt}</Typography></Box>
                <Box className="txtWrapper_right">
                    <Typography variant='h4'>{titleTxt}</Typography>
                    <Typography variant='body1'><i><IconDateOrange /></i>{dateFormat}</Typography>
                </Box>
            </Box>
        </UpcomingwebinarSecWrapper>
    )
}
