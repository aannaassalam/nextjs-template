// eslint-disable-next-line import/no-cycle
import { ContactPdF, pdfForm } from '@/api/functions/cms.api';
import { commonInnerSlider } from '@/interface/commonAll.interfaces';
import { SingleInnerSliderWrapper } from '@/styles/StyledComponents/SingleInnerSliderWrapper';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import DateIconSLider from '@/ui/Icons/DateIconSLider';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import CircularProgress from "@mui/material/CircularProgress";

import Typography from "@mui/material/Typography";
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is required!"),
    email: yup.string().email().required("Email is required!"),
    company_info: yup.string().required("Message is required"),
}).required()

export default function SingleInnerSlider({ ImagePath, ImageWidth, ImageHeight, titleTxt, document, dateTxts, }: commonInnerSlider) {

    const [details, setDetails] = useState(false);

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });



    const { isLoading, mutate } = useMutation(pdfForm);


    const onSubmit = (data: ContactPdF) => {
        mutate(data, {
            onSuccess: () => {
                setDetails(false);
                window.open(document)
                reset({
                    name: "",
                    email: "",
                    company_info: "",

                })
            }
        })
    }

    const sessionModalOpen = () => {
        setDetails(true);
    };

    const closeSession = () => {
        setDetails(false);
    };

    return (
        <>
            <SingleInnerSliderWrapper onClick={sessionModalOpen}>
                <Box>
                    <Box className="wrapper_main">
                        <figure><Image src={ImagePath} alt='image' width={ImageWidth} height={ImageHeight} /></figure>
                        <Box className="txtWrapper">
                            <Typography variant='h3'>{titleTxt}</Typography>
                            {/* <Typography variant='body1'>{subText}</Typography> */}
                            <Typography variant='body1' className='dateTxt'><i><DateIconSLider /></i>{dateTxts}</Typography>
                        </Box>
                    </Box>
                </Box>

            </SingleInnerSliderWrapper>
            <MuiModalWrapper open={details}
                onClose={closeSession}
                title="">
                <Box className="main_formModals">
                    <Typography variant='h2'>User info Form</Typography>
                    <Box className="wrapper_allForm">
                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='Full name' {...register("name")} error={Boolean(errors.name)} helperText={errors.name?.message as string} />
                        </Box>
                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='Email address' {...register("email")} error={Boolean(errors.email)} helperText={errors.email?.message as string} />
                        </Box>

                        <Box className="aSingle_inputs">
                            <InputFieldCommon placeholder='company info' multiline {...register("company_info")} error={Boolean(errors.company_info)} helperText={errors.company_info?.message as string} />
                        </Box>
                        <Box className="btnWrap">
                            <CustomButtonPrimary variant='contained' color='primary' type="button" onClick={handleSubmit(data => onSubmit(data as ContactPdF))} disabled={isLoading}>
                                {
                                    isLoading ? <Stack alignItems="center" justifyContent="center" sx={{ color: "rgb(39, 30, 60)" }}><CircularProgress size={15} color="inherit" /></Stack> : <Typography variant='caption'>Submit</Typography>
                                }
                            </CustomButtonPrimary>
                        </Box>
                    </Box>
                </Box>
            </MuiModalWrapper>
        </>
    )
}
