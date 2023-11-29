/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
import { industryProps } from "@/interface/commonAll.interfaces";
import assest from "@/json/assest";
import { CompanyIndustryStyled } from "@/styles/StyledComponents/CompanyIndustryStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { useState } from "react";

import { ContactBody, contactUs } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import CrossIcon from "@/ui/Icons/CrossIcon";
import RightIcon from "@/ui/Icons/RightIcon";
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import { OrgsDisclosing } from "pages/sector";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import CompanyPercentCard from "../CompanyPercentCard/CompanyPercentCard";
import IndustryFullBodyRightTop from "../IndustryFullBodyRightTop/IndustryFullBodyRightTop";

const schema = yup.object().shape({
    full_name: yup.string().required("Name is required!"),
    email: yup.string().email().required("Email is required!"),
    phone: yup.string().required("Phone is required!"),
    message: yup.string().required("Message is required"),
}).required()


const CompanyIndustry = ({ industryName, industryLeaders, sector_data, company_name, total_percent }: industryProps) => {

    const [details, setdetails] = useState(false);

    const { toastSuccess } = useNotiStack()

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const { isLoading, mutate } = useMutation(contactUs)

    const sessionModalOpen = () => {
        setdetails(true);
    };

    const closeSession = () => {
        setdetails(false);
    };

    const onSubmit = (data: ContactBody) => {
        mutate(data, {
            onSuccess: () => {
                toastSuccess("We will contact you soon!");
                setdetails(false);
                reset({
                    full_name: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            }
        })
    }

    return (
        <CompanyIndustryStyled>
            <Container fixed>
                <Box className="industryFull">
                    <Stack className="industryFullHeader" direction="row">
                        <Box className="industryFullHeaderLeft">
                            <Typography variant="h3" sx={{ textTransform: 'capitalize' }}>{industryName}</Typography>
                        </Box>
                        <Box className="industryFullHeaderRight industryFullHeaderRightDsktp">
                            <Stack direction="row" alignItems="center">
                                <Image src={assest.aiaLogo} alt="" width={50} height={44} />
                                <Typography variant="h3">{industryLeaders}</Typography>
                                {/* <Typography variant="h3">{compliance}</Typography> */}
                            </Stack>

                        </Box>
                    </Stack>

                    <Stack className="industryFullBody" direction="row" alignItems="flex-start">
                        <Box className="industryFullBodyLeft">
                            {sector_data ?
                                Object.keys(sector_data?.orgs_disclosing as OrgsDisclosing).map((item, index) => (
                                    <Stack direction="row" alignItems="center" key={index}>
                                        <Box className="bodyTxt">
                                            <Typography variant="body1">{item}</Typography>
                                            {/* <Box className="progressBar">
                                                <LinearProgressWithLabel value={sector_data?.orgs_disclosing[item as keyof OrgsDisclosing] as number * 100} className={`class${index + 1}`} />
                                            </Box> */}
                                        </Box>
                                        <Box className="bodyIcon">{sector_data?.orgs_disclosing[item as keyof OrgsDisclosing] as number ? <RightIcon /> : <CrossIcon />}</Box>
                                    </Stack>
                                )) : <p>
                                    No Data Available
                                </p>
                            }
                        </Box>

                        <Stack className="industryFullBodyRight" direction="column">
                            <Stack className="industryFullHeader industryFullHeaderRightMobile" direction="row">
                                <Box className="industryFullHeaderRight">
                                    <Stack direction="row" alignItems="center">
                                        <Image src={assest.aiaLogo} alt="" width={50} height={44} />
                                        {/* <Typography variant="h3">{compliance}</Typography> */}
                                        <Typography variant="h3">{industryLeaders}</Typography>
                                    </Stack>

                                </Box>
                            </Stack>

                            <IndustryFullBodyRightTop totalPercent={total_percent} company_name={company_name} percentTxt="Overall TCFD Score" />
                            <CompanyPercentCard />
                        </Stack>
                    </Stack>

                    <Stack direction="column" justifyContent="center" alignItems="center" className="requestReport">
                        <Typography variant="h3" sx={{ textTransform: 'capitalize' }}>Request Full Report {company_name ? "on" : null} {company_name}</Typography>
                        <CustomButtonPrimary type="button" variant="contained" color="primary" onClick={sessionModalOpen}><Typography variant="caption">Access Full Report</Typography></CustomButtonPrimary>
                    </Stack>
                </Box>
            </Container>

            <Image src={assest.blueShadow} alt="" width={384} height={455} className="blueShadow" />
            <Image src={assest.yellowShadow} alt="" width={384} height={409} className="yellowShadow" />
            <Image src={assest.orangeRoundBig} alt="" width={234} height={234} className="orangeRoundBig" />
            <Image src={assest.orangeRoundSmall} alt="" width={25} height={25} className="orangeRoundSmall" />

            <MuiModalWrapper open={details}
                onClose={closeSession}
                title="">
                <Box className="main_formModals">
                    <Typography variant='h2'>Access Full Report</Typography>
                    <Box className="wrapper_allForm">
                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='Full name' {...register("full_name")} error={Boolean(errors.full_name)} helperText={errors.full_name?.message as string} />
                        </Box>
                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='Email address' {...register("email")} error={Boolean(errors.email)} helperText={errors.email?.message as string} />
                        </Box>
                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='Phone number' type="number" {...register("phone")} error={Boolean(errors.phone)} helperText={errors.phone?.message as string} />
                        </Box>
                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='Message' multiline {...register("message")} error={Boolean(errors.message)} helperText={errors.message?.message as string} />
                        </Box>
                        <Box className="btnWrap">
                            <CustomButtonPrimary variant='contained' color='primary' type="button" onClick={handleSubmit(data => onSubmit(data as ContactBody))} disabled={isLoading}>
                                {
                                    isLoading ? <Stack alignItems="center" justifyContent="center" sx={{ color: "rgb(39, 30, 60)" }}><CircularProgress size={15} color="inherit" /></Stack> : <Typography variant='caption'>Submit</Typography>
                                }
                            </CustomButtonPrimary>
                        </Box>
                    </Box>
                </Box>
            </MuiModalWrapper>
        </CompanyIndustryStyled>
    )
}

export default CompanyIndustry