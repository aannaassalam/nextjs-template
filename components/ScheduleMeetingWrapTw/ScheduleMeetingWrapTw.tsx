import { scheduleMeetingListSectorWise, scheduleMeetingListTw } from '@/json/mock/schedulemeeting.mock';
import { ScheduleMeetingWrapper } from '@/styles/StyledComponents/ScheduleMeetingWrapper';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import SearchIcon from '@/ui/Icons/SearchIcon';
import Typography from "@mui/material/Typography";
import { Box, Stack } from '@mui/system';
// eslint-disable-next-line import/no-cycle
import Autocomplete from "@mui/material/Autocomplete";
import Link from 'next/link';
import { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import ScheduleMeeting from '../ScheduleMeeting/ScheduleMeeting';

export interface IEachOrg {
    org_name: string
    overall_TCFD_score: number
    regulatory_TCFD_score: number
    discretionary_TCFD_score: number;
}
export interface ScheduleProps {
    data: IEachOrg[];
    sector: string;
    search_slug: string;
    isLoading?: boolean;
}

const ScheduleMeetingWrapTw = ({ data, sector, search_slug, isLoading = false }: ScheduleProps) => {

    const [search, setSearch] = useState("")

    const processed_companies = data?.map((_org: any) => _org.org_name)

    return (
        <ScheduleMeetingWrapper>
            <ScheduleMeeting buttonText="Share" scheduleBtn="Schedule a Meeting" sector={sector} scheduleMeetings={scheduleMeetingListTw} scheduleMeeting={scheduleMeetingListSectorWise}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" className="wrapper_Top">
                    <Typography variant='h2' className='titleTwTxt'>Sector</Typography>

                    <Box className="aiaTxtInput">
                        <Autocomplete
                            options={processed_companies || []}
                            inputValue={search}
                            onInputChange={(event, newInputValue) => {
                                setSearch(newInputValue);
                            }}
                            loading={isLoading}
                            loadingText="Loading..."
                            renderOption={(props, option: string) => (
                                <Box component='li' {...props} key={option}>
                                    <Link href={`/${search_slug}/${option}`} onClick={() => setSearch(option)} style={{ textDecoration: "none", color: "#333", display: 'block', width: '100%', paddingInline: "20px", textTransform: 'capitalize' }}>{option}</Link>
                                </Box>
                            )}
                            disableClearable
                            noOptionsText="No Sectors found!"
                            renderInput={(params) => <InputFieldCommon placeholder='Search' adorMentIcon={<SearchIcon IconColor='rgba(39, 30, 60, 1)' />} {...params} />}
                        />
                    </Box>
                </Stack>
            </ScheduleMeeting>
        </ScheduleMeetingWrapper>
    )
}

export default ScheduleMeetingWrapTw