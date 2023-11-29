/* eslint-disable no-undef */
import Seo from "@/components/Seo/Seo";
import useOnlineStatus from "@/hooks/useDetectOnline";
import { WrapperStyle } from "@/styles/StyledComponents/WrapperStyle";
import { primaryColors } from "@/themes/_muiPalette";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { IOrg } from "pages";
import React from "react";
import { useQuery } from "react-query";
import Footer from "../Footer/Footer";

// eslint-disable-next-line import/no-cycle
const Header = dynamic(() => import("../Header/Header"));


interface wrapperProps {
  children: JSX.Element | JSX.Element[];
  isSearchShow?: boolean;
}

const Wrapper = (props: wrapperProps) => {


  const { children, isSearchShow = false } = props;

  const { data: all_organization, isLoading } = useQuery(["all_orgs"], {
    queryFn: async () => {
      const res = await axios.get("/api/all_org_data");
      return res?.data
    }
  })

  const processed_organization = React.useMemo(() => { return all_organization?.payload.map((_org: IOrg) => ({ name: _org.org_name, sector: _org.org_sector })).filter((_sec: { name: string, sector: string }) => _sec.sector !== null) }, [all_organization?.payload])

  const all_sectors = React.useMemo(() => {
    const _data: { [key: string]: number } = {};
    all_organization?.payload.forEach((_org: IOrg) => { _data[_org.org_sector] = 1 })
    return Object.keys(_data).filter((_sec: string) => _sec !== "null")
  }, [all_organization?.payload]);


  const router = useRouter();

  const routerText = router.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString().toUpperCase();
  const projectName = "Climate Disclosure";

  useOnlineStatus();

  if (isLoading) {
    return <Backdrop
      sx={{
        color: `${primaryColors?.white}`,
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={isLoading}
    // onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  }

  return (
    <WrapperStyle>
      <Seo
        title={
          router.pathname === "/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
        canonical=""
        description=""
        url=""
        image=""
      />
      <Header isSearchShow={isSearchShow} processed_organization={processed_organization} sectors={all_sectors} />

      <Box className="body_content">{children}</Box>

      <Footer />
    </WrapperStyle>
  );
};

export default Wrapper;
