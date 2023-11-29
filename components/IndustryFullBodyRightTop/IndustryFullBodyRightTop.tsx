// eslint-disable-next-line import/no-cycle
import { metricsAndTarget } from '@/interface/commonAll.interfaces';
import FlagIcon from '@/ui/Icons/FlagIcon';
import Typography from "@mui/material/Typography";
import { Box, Stack } from '@mui/system';
import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';

const IndustryFullBodyRightTop = ({ company_name, totalPercent, percentTxt }: metricsAndTarget) => {

    return (
        <Stack direction="row" justifyContent="space-between" className="industryLeader">
            <Stack direction="row" alignItems="center" className="industryLeaderTxt">
                <Box className="industryLeaderTxtIcon"><FlagIcon /></Box>
                <Stack direction="column" justifyContent="flex-start">
                    <Typography variant="h4">{company_name}</Typography>
                    <Typography variant="body1">{percentTxt}</Typography>
                </Stack>
            </Stack>

            <Box className="industryLeaderProgress">
                <LinearProgressWithLabel value={totalPercent} />
            </Box>
        </Stack>
    )
}

export default IndustryFullBodyRightTop