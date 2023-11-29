import assest from "@/json/assest";
import styles from "@/styles/pages/404.module.scss";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Index() {

  const router = useRouter();

  return <div className={styles.container}>
    <div className={styles.inner}>
      <Image src={assest.image_404} alt="404 image" width={474} height={167} className={styles.errorImg} />
      <Typography variant="h2" sx={{ fontSize: 40, color: "#fff", marginTop: "30px" }}>Page Not Found</Typography>
      <Typography variant="body1" sx={{ color: "#fff", margin: "22px 0 34px" }}>Sorry, we couldn’t found the page you are looking for.</Typography>
      <CustomButtonPrimary variant="contained" color="primary" onClick={() => router.push('/', undefined, { shallow: true })} sx={{ padding: "16px 44px !important", zIndex: 1 }}>
        <Typography variant="caption">Go to homepage</Typography>
      </CustomButtonPrimary>
    </div>
    <Image src={assest.plug} alt="plug" width={388} height={1664} />
  </div>
};
