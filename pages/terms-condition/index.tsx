/* eslint-disable react/no-unescaped-entities */
import { fetchTermsAndConditions } from "@/api/functions/cms.api";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Wrapper from "@/layout/wrapper/Wrapper";
import {
    EachBlockWrapper,
    TermsConditionWrapper
} from "@/styles/StyledComponents/TermsConditionWrapper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";

export const getServerSideProps = async () => {

    const { data: terms_and_condition } = await fetchTermsAndConditions()

    return {
        props: {
            terms_and_condition
        }
    }
}

interface eachBlockProps {
    title: string;

    children?: React.ReactNode;
}

export function EachBlock({ title, children }: eachBlockProps) {
    return (
        <EachBlockWrapper>
            <Typography variant="h2">{title}</Typography>
            {children}
        </EachBlockWrapper>
    );
}

interface TermsAndConditionProps {
    _id: string
    title: string
    slug: string
    description: string
    content: string
}

interface termsPageProps {
    terms_and_condition: TermsAndConditionProps
}

export default function Index({ terms_and_condition }: termsPageProps) {

    return (
        <Wrapper>
            <InnerBanner bannerText={terms_and_condition.title} />
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
                    <Box dangerouslySetInnerHTML={{ __html: terms_and_condition.content }} />
                </Container>
            </TermsConditionWrapper>
        </Wrapper>
    );
}
