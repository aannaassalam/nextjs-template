//import { GetOrganizationByName, HomepageData } from "@/api/functions/cms.api";
import { fetchSectorWiseDocuments } from "@/api/functions/cms.api";
import CommonInnerSlider from "@/components/CommonInnerSlider/CommonInnerSlider";
import CompanyAbout from "@/components/CompanyAbout/CompanyAbout";
import CompanyIndustry from "@/components/CompanyIndustry/CompanyIndustry";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import ScheduleMeetingWrap from "@/components/ScheduleMeetingWrap/ScheduleMeetingWrap";
import ValuedDocuments from "@/components/ValuedDocuments/ValuedDocuments";
import Wrapper from "@/layout/wrapper/Wrapper";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const CompanyDetails = () => {
  const router = useRouter();

  const organization: string | undefined = (router?.query?.slug as string).replace("-", " ");

  const { data, isLoading, isError, error } = useQuery(["org_data", organization], {
    queryFn: async () => {
      const res = await axios.get(`/api/org_data?org_name=${encodeURIComponent(organization)}`)
      return res.data;
    },
    retry: false
  })

  const { data: sector_documents, isLoading: documents_loading } = useQuery(["sector_documents", data?.payload?.org_sector], {
    queryFn: async () => {
      const res = await fetchSectorWiseDocuments(data?.payload?.org_sector)
      console.log(res.data)
      return res?.data;
    },
    enabled: !!data?.payload?.org_sector // Enable the query only when org_sector is available
  });

  const { data: org_sector_data, isLoading: org_sector_loading } = useQuery(["sector data", data?.payload?.org_sector], {
    queryFn: async () => {
      const res = await axios.get(`/api/sector_wise_data?sector=${encodeURIComponent(data?.payload?.org_sector)}`)
      return res
    },
    enabled: !!data?.payload?.org_sector
  })

  if (isLoading || org_sector_loading)
    return <Stack alignItems="center" justifyContent="center" sx={{ width: '100%', height: '100vh' }}>
      <CircularProgress />
    </Stack>

  if (isError) {
    // Redirect to the 404 page if there's an error or no data is received
    router.replace("/404");
  }

  return (
    <Wrapper isSearchShow>
      <InnerBanner bannerText="Company" />
      <ScheduleMeetingWrap />
      <CompanyAbout
        score={data?.payload}
      />
      <CompanyIndustry industryName={`${data?.payload?.org_sector}% Companies Disclosing `} compliance="Compliance" industryLeaders="Sector Leaders" sector_data={org_sector_data?.data.payload} company_name={data?.payload?.org_name} total_percent={(data?.payload?.scores?.overall_TCFD_score as number) * 100} />
      <CommonInnerSlider IfTxtIs TitleTxtIf="Sector Trends" bgImgIsShowTw bgImgIsShowThree documents={sector_documents?.data?.length ? sector_documents?.data : sector_documents?.data?.data} />
      <ValuedDocuments
        file={data?.payload}
      />
      {/* <Refference /> */}
    </Wrapper>
  )
}

export default CompanyDetails