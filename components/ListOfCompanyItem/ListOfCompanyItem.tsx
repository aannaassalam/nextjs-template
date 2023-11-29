/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import { ContactBody, claimProfile } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import { listCompanyItesm } from "@/interface/commonAll.interfaces";
import assets from "@/json/assest";
import { ListOfCompanyItemWrapper } from "@/styles/StyledComponents/ListOfCompanyItemWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import LocationIconOrange from "@/ui/Icons/LocationIconOrange";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().email().required("Email address is required!"),
  phone: yup.string().required("Phone Number is required!"),
  message: yup.string().required("Message is required"),
}).required()

export default function ListOfCompanyItem({
  imagePath,
  txtTitle,
  starRaningValue,
  starValue,
  totalStar,
  locationTxt,
  orgName
}: listCompanyItesm) {
  const onErrorImg = (ev: React.SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src = assets.imhInnerSlider2;
  };

  const router = useRouter();

  const [details, setdetails] = useState(false);

  const { toastSuccess } = useNotiStack()

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const { isLoading, mutate } = useMutation(claimProfile)

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
          name: "",
          email: "",
          phone: "",
          message: ""
        })
      }
    })
  }

  return (
    <ListOfCompanyItemWrapper>
      <Box className="wrapper_txtList">
        <Box className="wrapper_logoImg">
          <figure>
            {/* <Image src={imagePath} alt='icon' width={129} height={129} /> */}

            {imagePath !== undefined ? (
              <img
                //src={`${mediaPath}/uploads/user/profile_pic/${item?.user_info?.profile_image}`}
                src={imagePath}
                alt="img"
                width={129}
                height={129}
                onError={onErrorImg}
              />
            ) : (
              <Image
                src={assets.imhInnerSlider2}
                alt="img"
                width={111}
                height={43}
              />
            )}
          </figure>
        </Box>
        <Box className="wrapper_info">
          <Box className="infoTxts">
            <Typography variant="h4">{txtTitle}</Typography>
            <Box className="rating">
              <Rating
                name="half-rating-read"
                defaultValue={starRaningValue}
                precision={0.5}
                readOnly
                value={starValue}
              />
              <Typography variant="body1">{totalStar}</Typography>
            </Box>
            <Typography variant="body1" className="locationTxts">
              <i>
                <LocationIconOrange />
              </i>
              {locationTxt}
            </Typography>
          </Box>
          <Box className="checkBox_btnWRap">
            {/* <Box className="checkonly">
              <Checkbox
                icon={<UnCheckedIcon />}
                checkedIcon={<CheckedIcon />}
              />
              <Typography variant="caption">Compare</Typography>
            </Box> */}
            {/* <Link href={`/company/${orgName}`}> */}
            <Box className="btnWraps">

              <CustomButtonPrimary variant='contained' color='primary' onClick={() => router.push(`/company/${orgName.replace(" ", "+")}`)}>
                <Typography variant='caption'>View More</Typography>
              </CustomButtonPrimary>


              <CustomButtonPrimary variant='outlined' color='info' onClick={sessionModalOpen}>
                <Typography variant='caption'>Claim Profile</Typography>
              </CustomButtonPrimary>

            </Box>

            {/* </Link> */}
          </Box>
        </Box>
      </Box>
      <MuiModalWrapper open={details} onClose={closeSession} title="">
        <Box className="main_formModals">
          <Typography variant="h2">Claim profile</Typography>
          <Box className="wrapper_allForm">
            <Box className="aSingle_inputs">
              <InputFieldCommon
                placeholder="Full name"
                {...register("name")}
                error={Boolean(errors.name)}
                helperText={errors.name?.message as string}
              />
            </Box>
            <Box className="aSingle_inputs">
              <InputFieldCommon
                placeholder="Email address"
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email?.message as string}
              />
            </Box>
            <Box className="aSingle_inputs">
              <InputFieldCommon
                placeholder="Phone number"
                type="number"
                {...register("phone")}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message as string}
              />
            </Box>
            <Box className="aSingle_inputs">
              <InputFieldCommon
                placeholder="Message"
                multiline
                {...register("message")}
                error={Boolean(errors.message)}
                helperText={errors.message?.message as string}
              />
            </Box>
            <Box className="btnWrap">
              <CustomButtonPrimary
                variant="contained"
                color="primary"
                type="button"
                onClick={handleSubmit((data) =>
                  onSubmit(data as ContactBody)
                )}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{ color: "rgb(39, 30, 60)" }}
                  >
                    <CircularProgress size={15} color="inherit" />
                  </Stack>
                ) : (
                  <Typography variant="caption">Submit</Typography>
                )}
              </CustomButtonPrimary>
            </Box>
          </Box>
        </Box>
      </MuiModalWrapper>
    </ListOfCompanyItemWrapper>
  );
}
