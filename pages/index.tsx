import { useEffect } from "react";
import useNotiStack from "hooks/useNotistack";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import { getItemFromCookiesServerSide } from "@/lib/functions/storage.lib";
import Wrapper from "@/layout/wrapper/Wrapper";
import { useQuery } from "react-query";
import { fetchAboutUs } from "@/api/functions/cms.api";
import Loader from "@/ui/Loader/Loder";
import logger from "@/lib/functions/_logger.lib";
import { Divider } from "@mui/material";

const AllButtons = dynamic(() => import("@/components/AllButtons"), {
  ssr: true
});
const AllInputs = dynamic(() => import("@/components/AllInputs"), {
  ssr: true
});
const AllAvatar = dynamic(() => import("@/components/AllAvatar"), {
  ssr: true
});
const AllColors = dynamic(() => import("@/components/AllColors"), {
  ssr: true
});
const HomeSection = dynamic(() => import("@/components/HomeSection"), {
  ssr: true
});

// === get serverside methods ===4
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  };
};

export default function Home() {
  const { toastSuccess, toastError } = useNotiStack();
  const { isLoading, isError, data, error } = useQuery("todos", fetchAboutUs);

  useEffect(() => {
    toastError("err");
    toastSuccess("This is success");
  }, []);

  return (
    <Wrapper>
      <HomeSection title="Fetch cms api with react-query">
        <>
          {isLoading && <Loader />}
          {logger.error(error, "error")}

          {!!data && (
            <>
              <h1>{data?.data?.title}</h1>
              <Divider />
              <p>{data?.data?.description}</p>
            </>
          )}
        </>
      </HomeSection>

      <HomeSection title="Theme Colors">
        <AllColors />
      </HomeSection>

      <HomeSection title="Input tags">
        <AllInputs />
      </HomeSection>

      <HomeSection title="Buttons">
        <AllButtons />
      </HomeSection>

      <HomeSection title="Avatar">
        <AllAvatar />
      </HomeSection>
    </Wrapper>
  );
}
