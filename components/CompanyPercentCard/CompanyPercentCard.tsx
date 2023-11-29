import { companyLogoCard } from "@/json/mock/companyLogoCard.mock";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import React from "react";
import LinearProgressWithLabel from "../LinearProgressWithLabel/LinearProgressWithLabel";


const CompanyPercentCard = () => {

    const [progress] = React.useState(10);

    return (
        <Box className="companyCard">
            {
                companyLogoCard.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-end" key={index}>
                        <Box className="companyCardTxt">
                            <Image src={item?.image} alt="" width={item?.width} height={item?.height} />
                            <Typography variant="h4">{item?.logoName}</Typography>
                        </Box>
                        <Box className="companyCardProgress">
                            <LinearProgressWithLabel value={progress} className={`class${index + 1}`} />
                        </Box>
                    </Stack>
                ))
            }
        </Box>
    )
}

export default CompanyPercentCard