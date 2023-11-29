import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import UserIcon from '@/ui/Icons/UserIcon';
import LocationIcon from '@/ui/Icons/LocationIcon';
import { scheduleMeetingList } from '@/json/mock/schedulemeeting.mock';
import assest from '@/json/assest';
import ScheduleMeeting from '../ScheduleMeeting/ScheduleMeeting';




const ScheduleMeetingWrap = () => {

    const router = useRouter();
    return (
        <ScheduleMeeting buttonText="Share" scheduleBtn="Schedule a Meeting" scheduleMeeting={scheduleMeetingList} scheduleMeetingpara sector="">
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Image src={assest.aiaLogo} alt="" width={96} height={84} className='imgWrap_company' />

                <Box className="aiaTxt">
                    <Typography variant="h2">
                    {router?.query.slug && router.query.slug.toString().toUpperCase()}
                        </Typography>
                    <List>
                        <ListItem>
                            <LocationIcon />
                            <Typography variant="body1">China</Typography>
                        </ListItem>

                        <ListItem>
                            <UserIcon />
                            <Typography variant="body1">25,000</Typography>
                        </ListItem>
                    </List>
                </Box>
            </Stack>
        </ScheduleMeeting>
    )
}

export default ScheduleMeetingWrap