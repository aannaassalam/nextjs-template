/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-named-default */
import { GetOrganizations, GetSector, HomepageData, fetchHomepage } from "@/api/functions/cms.api";
//import{ GetSectorByName} from "@/hooks/usehome"
import Banner from "@/components/Banner/Banner";
import BannerAfterSec from "@/components/BannerAfterSec/BannerAfterSec";
import HomeTabSection from "@/components/HomeTabSection/HomeTabSection";
import ProspectSec from "@/components/ProspectSec/ProspectSec";
import TestimonialSec from "@/components/TestimonialSec/TestimonialSec";
import {
  default as WhyUsSection
} from "@/components/WhuUsSection/WhuUsSection";
import Box from "@mui/material/Box";

import Wrapper from "@/layout/wrapper/Wrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import SearchIcon from "@/ui/Icons/SearchIcon";
import Autocomplete, { AutocompleteRenderGroupParams } from "@mui/material/Autocomplete";
import axios from "axios";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";

export const sectors = [
  // "Communication Services",
  // "Consumer Discretionary",
  "Consumer Non-Durables",
  // "Energy",
  // "Financials",
  // "Health Care",
  "Information Technology",
  "Industrials",
  "Materials",
  "Real Estate",
  // "Utilities",
  // "Government",
  // "NonProfit",
  "Manufacturing",]


export const getServerSideProps = async () => {
  const { data: homepage_cms } = await fetchHomepage();
  const { data: organization } = await GetSector();
  const { data: all_organization } = await GetOrganizations();

  return {
    props: {
      homepage_cms,
      organization,
      all_organization
    }
  }
}

interface homepageProps {
  homepage_cms: HomepageData,
  organization: HomepageData,
  all_organization: any;
}

export interface IOrg {
  id: number;
  org_sector: string;
  org_name: string;
}

export interface IOrgs {
  id: number;
  organizations: string;
  sectors: string;
}

export interface IOptions {
  name: string;
  sector: string;
}

export default function Home({ homepage_cms, organization, all_organization }: homepageProps) {
  const [search, setSearch] = useState("");

  const processed_organization = useMemo(() => { return all_organization.payload.map((_org: IOrg) => ({ name: _org.org_name, sector: _org.org_sector })).filter((_sec: { name: string, sector: string }) => _sec.sector !== null) }, [all_organization?.payload])

  const { data: all_sectors, isLoading } = useQuery({
    queryFn: async () => {
      const res = await axios.get("/api/all_sectors");
      return res.data
    }
  })

  return (
    <Wrapper>
      <Banner
        title={homepage_cms.section1?.heading}
        subtitle={homepage_cms.section1?.sub_heading}
      >
        <Box className="banner_search">
          <Autocomplete
            options={processed_organization.sort((a: IOptions, b: IOptions) => a.sector.localeCompare(b.sector))}
            groupBy={(option: IOptions) => option.sector}
            getOptionLabel={(option: IOptions) => `${option.name} ${option.sector}`}
            inputValue={search}
            onInputChange={(event, newInputValue) => {
              setSearch(newInputValue);
            }}
            renderGroup={(params: AutocompleteRenderGroupParams) => {
              return <Box component='li' key={params.key}>
                <Link href={`/sector/${params.group.replace(" ", "+")}`} shallow onClick={() => setSearch(params.group)} style={{ textDecoration: "none", color: "#999", padding: "10px 20px", display: 'block', width: '100%', fontWeight: '500', textTransform: 'capitalize' }}>{params.group}</Link>
                {params.children}
              </Box>
            }}
            renderOption={(props, option: IOptions) => (
              <Box component='li' {...props} key={option.name}>
                <Link href={`/company/${option.name.replace(" ", "+")}`} shallow onClick={() => setSearch(option.name)} style={{ textDecoration: "none", color: "#333", display: 'block', width: '100%', paddingInline: "20px", textTransform: 'capitalize' }}>{option.name}</Link>
              </Box>
            )}
            disableClearable
            noOptionsText="No Companies or Sectors found!"
            renderInput={(params) => <InputFieldCommon
              placeholder="Enter Sector or company name..."
              startAdormentIcon
              adorMentIcon={<SearchIcon />}
              {...params}
            />}
          />
        </Box>
      </Banner>
      <BannerAfterSec
        description={homepage_cms.section2?.description}
        image={homepage_cms.section2?.image}
        title={homepage_cms.section2?.heading}
      />
      <HomeTabSection organization={organization?.payload} sectors={all_sectors?.filter((_sec: string) => _sec !== "null")} />
      <WhyUsSection data={homepage_cms.section3} />
      <ProspectSec data={homepage_cms.section4} />
      <TestimonialSec data={homepage_cms.section5} />



    </Wrapper>
  );
}
