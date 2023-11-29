/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ContactBody, contactUs, fetchSocialMediaUrls } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import assest from "@/json/assest";
import { FooterWrap } from "@/styles/StyledComponents/FooterWrap";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as yup from "yup";


const schema = yup.object().shape({
  full_name: yup.string().required("Name is required!"),
  email: yup.string().email().required("Email is required!"),
  phone: yup.string().required("Phone is required!"),
  message: yup.string().required("Message is required"),
}).required()

const Footer = () => {

  const { data: settings, isFetching } = useQuery("settings", fetchSocialMediaUrls)

  const navItems = [
    {
      name: "Sector",
      route: "/sector"
    },
    {
      name: "Solutions",
      route: "/coming-soon"
    },
    {
      name: "Resources",
      route: "/resources"
    },
    {
      name: "About",
      route: "/about-us"
    },
    {
      name: "Terms & Conditions",
      route: "/terms-condition"
    },
    {
      name: "Privacy Policy",
      route: "/privacy-policy"
    },
    {
      name: "Contact us",
      route: "#"
    }
  ];
  const footerSocial = [
    {
      link: isFetching ? "" : settings.data?.[0]?.fb,
      footerIcons: "/assets/images/footerSocialIcon1.svg",
      imgWidth: 8
    },
    {
      link: isFetching ? "" : settings.data?.[0]?.lnkdn,
      footerIcons: "/assets/images/footerSocialIcon2.svg",
      imgWidth: 13
    },
    {
      link: isFetching ? "" : settings.data?.[0]?.twtr,
      footerIcons: "/assets/images/footerSocialIcon3.svg",
      imgWidth: 13
    },
    {
      link: isFetching ? "" : settings.data?.[0]?.insta,
      footerIcons: "/assets/images/footerSocialIcon4.svg",
      imgWidth: 13
    }
  ];
  const router = useRouter();

  const [details, setdetails] = React.useState(false);

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
    <FooterWrap>
      <Image
        src={assest.footerShape3}
        alt="shapeImage"
        width={2500}
        height={300}
        className="shapeOne_ftr"
      />
      <Image
        src={assest.footerBtm_shape}
        alt="shapeImage"
        width={1600}
        height={325}
        className="shapeTwo_ftr"
      />
      <Image
        src={assest.footerBtmDot1}
        alt="shapeImage"
        width={180}
        height={58}
        className="shapeThree_ftr"
      />
      <Container fixed className="custom_container">
        <Box className="ftr-wrapper">
          <Box className="footerLogoWrap">
            <Link href="/" className="ftr-logo">
              <Image src={assest.footer_logo} alt="" width={290} height={50} />
            </Link>
          </Box>
          <List className="ftr-list">
            {navItems.map((item: any, index: number) => (
              <ListItem disablePadding key={index}>
                <Link
                  href={item?.route}
                  key={item.name}
                  className={router.pathname === item.route ? "active" : ""}
                  onClick={() => item.route === "#" ? sessionModalOpen() : null}
                >
                  {item?.name}
                </Link>
              </ListItem>
            ))}
          </List>
          <Box className="footer_bottm">
            <List disablePadding className="social-list">
              {footerSocial.map((item: any, index: number) => (
                <ListItem disablePadding key={index}>
                  <Link href={item.link}>
                    <Image
                      src={item.footerIcons}
                      alt="icon"
                      width={item.imgWidth}
                      height={12}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
            <Box className="copy">
              C© Copyright 2024 <Link href="https://www.manifestclimate.com/">Climate Disclosures -</Link> All Rights Reserved.
            </Box>
            {/* <Box className="copy">
              Web Design by <strong>Webskitters</strong>
            </Box> */}
          </Box>
        </Box>
        <MuiModalWrapper open={details}
          onClose={closeSession}
          title="">
          <Box className="main_formModals">
            <Typography variant='h2'>Contact Us</Typography>
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
      </Container>
    </FooterWrap>
  );
};

export default Footer;
