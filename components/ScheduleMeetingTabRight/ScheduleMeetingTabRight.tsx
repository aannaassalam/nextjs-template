import { ScheduleMeetingTabRightWrapper } from '@/styles/StyledComponents/ScheduleMeetingTabRightWrapper';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import Image from 'next/image';

export interface scheduleMeetinProps {
    title: string;
    btnTxt: string;
    imgPath: string;
}

export default function ScheduleMeetingTabRight({ title, imgPath, btnTxt }: scheduleMeetinProps) {
    return (
        <ScheduleMeetingTabRightWrapper>
            <Box className="wrapper_meeting">
                <figure><Image src={imgPath} alt='icon' width={82} height={82} /></figure>
                <Typography variant='h3'>{title}</Typography>
                <CustomButtonPrimary variant='contained' color='primary' >
                    <Typography variant='caption'>{btnTxt}</Typography>
                </CustomButtonPrimary>
            </Box>
        </ScheduleMeetingTabRightWrapper>
    )
}
