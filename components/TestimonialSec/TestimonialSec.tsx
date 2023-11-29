/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-array-index-key */
import { TestimonialList } from "@/json/mock/testimonial.mock";
import {
  TestimonialCardWrapper,
  TestimonialWrapper
} from "@/styles/StyledComponents/TestimonialWrapper";
import ComaIcon from "@/ui/Icons/ComaIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { HomepageSection5, TestimonialData, fetchTestimonials } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { Container } from "@mui/system";
import Image from "next/image";
import { useQuery } from "react-query";
import CommonHeader from "../CommonHeader/CommonHeader";

export const TestimonialCard = ({
  name,
  text
}: TestimonialData) => {
  return (
    <TestimonialCardWrapper>
      <i>
        <ComaIcon />
      </i>
      <Typography>{text}</Typography>
      <Typography variant="h4">-{name}</Typography>
    </TestimonialCardWrapper>
  );
};

interface TestimonialProps {
  data: HomepageSection5
}

export default function TestimonialSec({ data }: TestimonialProps) {

  const { data: testimonials, isFetching } = useQuery("testimonials", fetchTestimonials);

  const settings = {
    dots: false,
    arrows: true,
    infinite: testimonials?.data?.length > 2,
    speed: 500,
    slidesToShow: TestimonialList?.length < 4 ? TestimonialList?.length - 1 : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <TestimonialWrapper className="cmn_gap">
      <Container fixed>
        <CommonHeader
          chipName={data?.heading}
          headerTitle={data?.sub_heading}
          alignMiddle
        />
        <Box className="slider_sec">
          <Image
            src={assest?.small_elps}
            alt="ellpise"
            width={25}
            height={25}
            className="small_elps"
          />
          {
            isFetching ?
              "Loading..." :
              <Slider {...settings}>
                {testimonials?.data?.map((_testimonial: TestimonialData, index: number) => (
                  <TestimonialCard {..._testimonial} key={index} />
                ))}
              </Slider>
          }
        </Box>
      </Container>
    </TestimonialWrapper>
  );
}
