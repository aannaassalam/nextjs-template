/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unsafe-optional-chaining */
import { CommonInnerSliderWrapper } from '@/styles/StyledComponents/CommonInnerSliderWrapper';
import { Box, Container } from '@mui/system';
import Slider from "react-slick";

// eslint-disable-next-line import/no-cycle
import { sliderTopProps } from '@/interface/commonAll.interfaces';
import assest from '@/json/assest';
import Typography from "@mui/material/Typography";
import moment from "moment";
import Image from 'next/image';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";



import { mediaUrl } from '@/api/endpoints';
import SingleInnerSlider from '../SingleInnerSlider/SingleInnerSlider';




interface items {
    item: string[] | any;
}



export default function CommonInnerSlider({ IfTxtIs, TitleTxtIf, bgImgIsShow, bgImgIsShowTw, bgImgIsShowThree, documents = [] }: sliderTopProps) {

    const settings = {
        dots: false,
        arrows: true,
        infinite: !!documents && documents.length > 3,
        speed: 500,
        slidesToShow: !!documents && documents.length > 3 ? 3 : documents?.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
        <CommonInnerSliderWrapper>
            <Container fixed>
                <Box className="wrapperInner" sx={{
                    cursor: 'pointer'
                }}>
                    {bgImgIsShow === true &&
                        (
                            <Box className="imgWRapper_oneTw">
                                <Image src={assest.iconWrapperCircleImg1} alt="" width={234} height={234} />
                            </Box>
                        )
                    }
                    {bgImgIsShowTw === true &&
                        (
                            <Box className="imgWRapper_oneSix">
                                <Image src={assest.shapeSqur11} alt="" width={234} height={234} />
                            </Box>
                        )
                    }
                    {bgImgIsShowThree === true &&
                        (
                            <Box className="imgWRapper_oneSeven">
                                <Image src={assest.shapeSqur12} alt="" width={25} height={25} />
                            </Box>
                        )
                    }

                    {
                        IfTxtIs === true &&
                        (
                            <Typography variant='h2'>{TitleTxtIf}</Typography>
                        )
                    }
                    <Slider {...settings}>
                        {documents?.map((item, index) => (




                            //  <Link href={mediaUrl(item.document, "sector")} download>
                            // <div className='pdfFile'>
                            <SingleInnerSlider ImagePath={assest.imhInnerSlider1} ImageWidth={151} ImageHeight={208} titleTxt={item.document.split("_").slice(1).join(" ")} document={mediaUrl(item.document, "sector")} dateTxts={moment(item.createdAt).format('LL')} key={index} />

                            // </div>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </CommonInnerSliderWrapper>
    )
}
