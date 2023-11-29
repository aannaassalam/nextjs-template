import { mediaUrl } from "@/api/endpoints";
import { fetchAllSectorResource } from "@/api/functions/cms.api";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import { Accordion, AccordionSummary } from "@/components/ResourcesAccordion/ResourcesAccordion";
import SingleInnerSlider from "@/components/SingleInnerSlider/SingleInnerSlider";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { EachBlockWrapper, TermsConditionWrapper } from "@/styles/StyledComponents/TermsConditionWrapper";
import AccordionDetails from "@mui/material/AccordionDetails";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import moment from "moment";
import React from "react";

export const getServerSideProps = async () => {

    const { data: resources } = await fetchAllSectorResource();

    return {
        props: {
            resources
        }
    }
}

interface eachBlockProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export function EachBlock({ title, children, subtitle }: eachBlockProps) {
    return (
        <EachBlockWrapper>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h3">

                {subtitle}
            </Typography>
            {children}

        </EachBlockWrapper>
    )
}

export interface DocumentDetail {
    _id: string
    document: string
    createdAt: string
}

interface SolutionsProps {
    _id: string
    sector_name: string
    document_details: DocumentDetail[]
}

interface solutionPageProps {
    resources: SolutionsProps[]
}

export default function Index({ resources }: solutionPageProps) {

    return (
        <Wrapper>
            <InnerBanner bannerText="Resources" />
            <TermsConditionWrapper className="cmn_gap">
                <Container fixed >
                    {/* <EachBlock title="" subtitle="1.1. WELCOME TO CLIMATEDISCLOSURES.COM (THE “SITE”). PLEASE READ THESE TERMS OF USE (“TERMS”)" >
                        <Typography>CAREFULLY, WHICH GOVERN YOUR ACCESS TO AND USE OF THE SITE. BY USING THE SITE, YOU AGREE TO

                            BE BOUND BY THESE TERMS, AS REVISED FROM TIME TO TIME. IF YOU DO NOT ACCEPT THESE TERMS, YOU

                            MUST NOT ACCESS OR USE THE SITE. IF YOU ARE DISSATISFIED WITH THESE TERMS OR ANY OTHER

                            TERMS, CONDITIONS, RULES, POLICIES, GUIDELINES OR PRACTICES APPLICABLE TO THE SITE, YOUR SOLE

                            AND EXCLUSIVE REMEDY IS TO DISCONTINUE ACCESS TO AND USE OF THE SITE. IF YOU ARE USING AND

                            ACCESSING THE SERVICES ON BEHALF OF AN ORGANIZATION, YOU REPRESENT THAT YOU HAVE THE

                            AUTHORITY TO BIND THAT ORGANIZATION TO THESE TERMS, IN WHICH CASE “YOU” OR “YOUR” WILL

                            REFER TO SUCH ORGANIZATION. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT AGREE WITH

                            THESE TERMS, YOU MUST NOT ACCESS OR USE THE SITE IN SUCH CAPACITY.

                        </Typography>
                    </EachBlock> */}
                    {/* <Box dangerouslySetInnerHTML={{ __html: privacy_policy.content }} /> */}
                    {
                        resources.map(_resource => {
                            return <Accordion>
                                <AccordionSummary>
                                    <Typography variant="h3" sx={{ marginBottom: "0 !important" }}>{_resource.sector_name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack flexWrap="wrap" direction="row" gap={3} sx={{ paddingBlock: "20px" }}>
                                        {
                                            _resource.document_details.map(document => <SingleInnerSlider ImagePath={assest.imhInnerSlider1} ImageWidth={151} ImageHeight={208} titleTxt={document.document.split("_").slice(1).join(" ")} document={mediaUrl(document.document, "sector")} dateTxts={moment(document.createdAt).format('LL')} key={document._id} />)
                                        }
                                    </Stack>
                                </AccordionDetails>

                            </Accordion>
                        })
                    }
                </Container>
            </TermsConditionWrapper>
        </Wrapper>
    );
}
