/* eslint-disable react/no-array-index-key */
import { fetchWebinar } from '@/api/functions/cms.api';
import { UpcomingwebinarSecWrapper } from '@/styles/StyledComponents/UpcomingwebinarSecWrapper';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import moment from 'moment';
import { useQuery } from 'react-query';
// eslint-disable-next-line import/no-cycle
import { useRouter } from 'next/router';
import SingelWebinerList from '../SingelWebinerList/SingelWebinerList';

export default function UpcomingwebinarSec() {

    const { data, isLoading } = useQuery(['webinar'], fetchWebinar);
    const router = useRouter()

    return (
        <UpcomingwebinarSecWrapper>
            <Box className="wrapper_inner">
                <Typography variant='h3'>Upcoming webinar</Typography>
                <Box className="all_wrapperList">
                    {data?.data?.map((item) => (
                        <Box className="singleList" component={item.link ? 'a' : 'div'} target='_blank' href={item.link} key={item._id} sx={{ cursor: item.link ? "pointer" : "default" }}>
                            <SingelWebinerList dateTxt={moment(item.date).format("DD MMM")} titleTxt={item.title} dateFormat={moment(item.date).format("DD MMM, YYYY")} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </UpcomingwebinarSecWrapper>
    )
}
