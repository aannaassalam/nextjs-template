/* eslint-disable @next/next/no-img-element */
import { homeTabItemList } from "@/interface/commonAll.interfaces";
import assets from "@/json/assest";
import { HomeTabListCommonWrapper } from "@/styles/StyledComponents/HomeTabListCommonWrapper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";

export default function HomeTabListCommon({
  title,
  //starRatingValue,
  startNo,
  companyLogo,
  imgWidth,
  imgHeight,
  company,
  score,
}: homeTabItemList) {
  const onErrorImg = (ev: React.SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src = assets.imhInnerSlider2;
  };




  const router = useRouter();

  const handleBoxClick = () => {
    if (company) {
      router.push(`/company/${company.replace(" ", "+")}`);
    }
  };

  return (
    <HomeTabListCommonWrapper onClick={handleBoxClick}>

      <Box className="wrapper_main" >
        <Typography variant="h4">{title}</Typography>
        <Box className="startRating">
          <Box className="rating">

            {/* <Rating
              name="read-only"
              value={parseInt((score as unknown as number * 10).toFixed(0)) ? parseInt((score as unknown as number * 10).toFixed(0)) : 0}
              readOnly
            /> */}
            {/* <Rating
              name="half-rating-read"
              defaultValue={starRatingValue}
              precision={0.5}
              readOnly
              value={(score as unknown as number* 100).toFixed(1)}
            /> */}
          </Box>
          <Typography variant="body1">Overall TCFD Score - {(score! * 100)?.toFixed(1)}%</Typography>
        </Box>
        {/* <Link href={`/company/${company}`}> */}
        <Box className="logoImg">
          <figure>
            {companyLogo !== undefined ? (
              <img
                //src={`${mediaPath}/uploads/user/profile_pic/${item?.user_info?.profile_image}`}
                src={companyLogo}
                alt="img"
                width={imgWidth}
                height={imgHeight}
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
        {/* </Link> */}
      </Box>




    </HomeTabListCommonWrapper>

  );
}
