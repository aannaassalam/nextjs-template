/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { HomepageSection3 } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { WhyUsSectionWrap } from "@/styles/StyledComponents/WhyUsSectionWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import CircleElpsIcon from "@/ui/Icons/CircleElpsIcon";
import SmallOrangeBall from "@/ui/Icons/SmallOrangeBall";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

export const WhyUsCradWrap = styled(Box)`
  padding: 60px 30px;
  border-radius: 10px;
  background: ${primaryColors?.white};
  box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  @media(max-width: 1199px){
    padding: 30px 15px;
  }
  &:hover {
    background: ${primaryColors?.cardBgColor};
  }
  > i {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 176px;
    margin-bottom: 30px;
  }
  h5 {
    color: ${primaryColors?.textPrimaryColor};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 10px !important;
  }
  p {
    font-size: 15px;
  }
`;

interface whyuscardProps {
  image: string;
  title: string;
  description: string;
}

export const WhyUsCard = ({ ...props }: whyuscardProps) => {
  return (
    <WhyUsCradWrap>
      <i><Image src={props?.image} alt="why-us-image" width={250} height={178} /></i>
      <Typography variant="h5">{props?.title}</Typography>
      <Typography>{props?.description}</Typography>
    </WhyUsCradWrap>
  );
};

interface WhyUsProps {
  data: HomepageSection3
}

export default function WhyUsSection({ data }: WhyUsProps) {
  const whyusCardList = [
    {
      image: mediaUrl(data?.content_one?.image, "home-cms"),
      title: data?.content_one?.heading,
      description:
        data?.content_one?.description
    },
    {
      image: mediaUrl(data?.content_two?.image, "home-cms"),
      title: data?.content_two?.heading,
      description:
        data?.content_two?.heading
    },
    {
      image: mediaUrl(data?.content_three?.image, "home-cms"),
      title: data?.content_three?.heading,
      description:
        data?.content_three?.heading
    }
  ];
  return (
    <WhyUsSectionWrap className="cmn_sec ">
      <i className="small_orange_ball">
        <SmallOrangeBall />
      </i>
      <Container fixed>
        <Box className="why_us_inner">
          <Box className="top_head">
            <CommonHeader
              chipName={data?.heading}
              headerTitle={data?.sub_heading}
              alignMiddle
            />
          </Box>
          <Box className="why_us_content">
            <i className="crcl_ball">
              <CircleElpsIcon />
            </i>
            <Image
              src={assest?.why_us_elps}
              alt="image"
              width={1000}
              height={1000}
              className="why_us_elps"
            />
            <Image
              src={assest?.why_us_grn_elps}
              alt="image"
              width={1000}
              height={1000}
              className="why_us_grn_elps"
            />
            <Grid container spacing={{ lg: 4, md: 2, xs: 1.5 }}>
              {whyusCardList?.map((item, index) => (
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <WhyUsCard {...item} key={index} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </WhyUsSectionWrap>
  );
}
