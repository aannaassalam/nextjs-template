import { ScheduleMeetingProps } from "@/interface/commonAll.interfaces";
import { ScheduleMeetingStyled } from "@/styles/StyledComponents/ScheduleMeetingStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { yupResolver } from "@hookform/resolvers/yup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

import { ContactBody, scheduleMeeting as scheduleAMeeting } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import CircularProgress from "@mui/material/CircularProgress";




const schema = yup.object().shape({
    name: yup.string().required("Name is required!"),
    email: yup.string().email().required("Email is required!"),
    phone: yup.string().required("Phone is required!"),
    message: yup.string().required("Message is required"),
}).required()

const ScheduleMeeting = ({ children, buttonText, scheduleBtn, scheduleMeeting, scheduleMeetings, sector, scheduleMeetingpara }: ScheduleMeetingProps) => {
    //console.log(scheduleMeeting, "sector");

    const [details, setdetails] = useState(false);

    const { toastSuccess } = useNotiStack()

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const { isLoading, mutate } = useMutation(scheduleAMeeting)

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
        <ScheduleMeetingStyled>
            <Container>
                <Box className="scheduleMeeting">
                    <Stack direction="row" alignItems="center" justifyContent="space-between" className="scheduleMeetingUp">
                        {
                            children
                        }

                        <Box className="scheduleMeetingUpBtn"><CustomButtonPrimary type="button" variant="contained" color="primary"><Typography variant="caption">{buttonText}</Typography></CustomButtonPrimary></Box>
                    </Stack>

                    <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap='wrap' className="scheduleMeetingDown">
                        <List>

                            {sector ?
                                scheduleMeeting?.map((item) => (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <ListItem ><Link href={`#${item?.scheduleMenu}`}>{item?.scheduleMenu === 'Faq' ? 'FAQ' : item?.scheduleMenu}</Link></ListItem>
                                ))
                                :

                                scheduleMeetings?.map((item) => (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <ListItem ><Link href={`#${item?.scheduleMenu}`}>{item?.scheduleMenu === 'Faq' ? 'FAQ' : item?.scheduleMenu}</Link></ListItem>
                                ))
                            }

                        </List>

                        <Stack direction="column" alignItems="flex-end" className="scheduleMeetingDownTxt">
                            {
                                scheduleMeetingpara === true &&
                                (
                                    <Typography variant="body1">Own This Page? Talk To Our Team</Typography>
                                )
                            }

                            <Box className="scheduleBtn"><CustomButtonPrimary type="button" variant="contained" color="primary" onClick={sessionModalOpen}><Typography variant="caption">{scheduleBtn}</Typography></CustomButtonPrimary></Box>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
            <MuiModalWrapper open={details}
                onClose={closeSession}
                title="">
                <Box className="main_formModals">
                    <Typography variant='h2'>Schedule a Meeting</Typography>
                    <Box className="wrapper_allForm">
                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='Full name' {...register("name")} error={Boolean(errors.name)} helperText={errors.name?.message as string} />
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
        </ScheduleMeetingStyled>
    )
}

export default ScheduleMeeting