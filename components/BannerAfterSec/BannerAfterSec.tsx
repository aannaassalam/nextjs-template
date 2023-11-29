import { mediaUrl } from "@/api/endpoints";
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

import { ContactBody, contactUs } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

export const BannerAfterWrap = styled(Box)`
  margin-top: -165px;
  position: relative;
  z-index: 9;
  @media (max-width: 1199px) {
    margin-top: -90px;
  }
  .banner_btm_wrap {
    padding: 45px 35px;
    border-radius: 10px;
    background: ${primaryColors?.white};
    box-shadow: 0px 21px 25px -9px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 1;
    overflow: hidden;
    @media(max-width: 1199px){
      padding: 30px 20px;
    }
    @media(max-width: 599px){
      padding: 20px 10px;
    }
    @media(max-width:479px){
      justify-content: center;
    }
    .banner_after_shape {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      pointer-events: none;
      @media(max-width: 899px){
        height: 100%;
        object-fit: cover;
      }
    }
    .avatr_img {
      width: 105px;
      height: 105px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      @media(max-width:479px){
        max-width: 0 auto;
        max-width: 105px;
      }
      &::after {
        content: "";
        background: rgba(254, 220, 101, 0.15);
        border-radius: 100%;
        position: absolute;
        left: -11px;
        right: -11px;
        top: -11px;
        bottom: -11px;
        z-index: -1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
      }
    }
    .avatr_txt {
      flex-basis: calc(100% - 105px);
      max-width: calc(100% - 105px);
      padding-left: 50px;
      @media (max-width: 1199px) {
        padding-left: 30px;
      }
      @media(max-width:479px){
          flex-basis: 100%;
          max-width: 100%;
          padding: 15px 0 0;
          text-align: center;
      }
    }
    .avatr_txt_lft {
      flex-basis: 487px;
      @media (max-width: 1199px) {
        flex-basis: 380px;
      }
      @media (max-width: 899px) {
        flex-basis: 100%;
      }
      h5 {
        color: ${primaryColors?.textPrimaryColor};
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  .avatr_txt_rgt {
    flex-basis: 165px;
    @media (max-width: 899px) {
      flex-basis: 100%;
      margin-top: 15px;
    }
    button {
      padding: 10px 16px;
      min-width: 100%;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;

interface bannerafterPros {
  image: string;
  title: string;
  description: string;
}


const schema = yup.object().shape({
  full_name: yup.string().required("Name is required!"),
  email: yup.string().email().required("Email is required!"),
  phone: yup.string().required("Phone is required!"),
  message: yup.string().required("Message is required"),
}).required()



export default function BannerAfterSec({
  description,
  image,
  title
}: bannerafterPros) {

  const [details, setdetails] = useState(false);
  const [modal_name, setModal_name] = useState("")

  const { toastSuccess } = useNotiStack()

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const { isLoading, mutate } = useMutation(contactUs)

  const sessionModalOpen = (name: string) => {
    setdetails(true);
    setModal_name(name);
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
    <BannerAfterWrap>
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          className="banner_btm_wrap"
        >
          <Image
            src={assest?.banner_after_shape}
            alt="image"
            width={695}
            height={560}
            className="banner_after_shape"
          />
          <i className="avatr_img">
            <Image src={mediaUrl(image, "home-cms")} alt="avatar image" width={105} height={105} />
          </i>

          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="space-between"
            className="avatr_txt"
          >
            <Box className="avatr_txt_lft">
              <Typography variant="h5">{title}</Typography>
              <Typography>{description}</Typography>
            </Box>
            <Box className="avatr_txt_rgt">
              <CustomButtonPrimary variant="contained" color="primary" onClick={() => sessionModalOpen("Schedule a Meeting")}>
                <Typography variant="caption">Schedule Meeting</Typography>
              </CustomButtonPrimary>
              <CustomButtonPrimary variant="outlined" color="info" onClick={() => sessionModalOpen("Request an Inquiry")}>
                <Typography variant="caption">Inquire</Typography>
              </CustomButtonPrimary>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <MuiModalWrapper open={details}
        onClose={closeSession}
        title="">
        <Box className="main_formModals">
          <Typography variant='h2'>{modal_name}</Typography>
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
    </BannerAfterWrap>
  );
}
