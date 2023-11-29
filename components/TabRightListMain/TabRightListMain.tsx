/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
import { industryTabList } from '@/interface/commonAll.interfaces';
import { TabRightListMainWrapper } from '@/styles/StyledComponents/TabRightListMainWrapper';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';

export default function TabRightListMain({ titleTxtIs, title2, title, subTxt, }: industryTabList) {
    return (
        <TabRightListMainWrapper>
            <Box className="innerWrap_main">
                <Box className="singleWrap_txt">
                    {titleTxtIs === true &&
                        (
                            <Typography variant='h3'>{title2}</Typography>
                        )
                    }

                    <Typography variant='h4'>{title}</Typography>
                    <Typography variant='body1'>{subTxt}</Typography>
                </Box>
            </Box>
        </TabRightListMainWrapper >
    )
}
