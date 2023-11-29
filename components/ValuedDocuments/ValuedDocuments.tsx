/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { DocumentHeaderWrapper } from "@/styles/StyledComponents/DocumentHeaderWrapper";
import { ValuedDocumentsStyled } from "@/styles/StyledComponents/ValuedDocumentsStyled";
import { primaryColors } from "@/themes/_muiPalette";
import FileIcon from "@/ui/Icons/FileIcon";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";

interface headerProps {
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
}


export const DocumentHeader = ({ children, subTitle, title }: headerProps) => {
    return (
        <DocumentHeaderWrapper
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
        >
            <Box className="header_left">
                <Typography variant="h2">{title}</Typography>
                <Typography>{subTitle}</Typography>
            </Box>
            <Box className="header_rgt">{children}</Box>
        </DocumentHeaderWrapper>
    );
};

interface fileiconProps {
    title?: string | File
    // eslint-disable-next-line react/no-unused-prop-types
    file: string[] | File | unknown;
}
export const FileDownloadWrap = styled(Stack)`
  padding: 12px 12px;
  border-radius: 10px;
  border: 1px solid ${primaryColors?.colorEFECF6};
  background: ${primaryColors?.white};
  box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  .fileStack {
    @media (max-width:599px) {
        width: 100%;
        margin-bottom: 10px;
        justify-content: flex-start;
    }
    h4 {
      color: ${primaryColors?.black};
      font-size: 16px;
      font-weight: 600;
      margin-left: 17px;
    }
  }
  > button{
    padding: 10px 35px;
    min-width: auto;
  }
`;

const file_download = () => {

};
export const FileDownloadItem = ({ file }: fileiconProps) => {



    return (
        <FileDownloadWrap
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
                className="fileStack"
            >
                <FileIcon />
                <Typography variant="h4">{String(file)}</Typography>
            </Stack>
            {/* <CustomButtonPrimary variant="contained" color="primary">
                <Typography variant="caption" onClick={() =>
                    file_download()
                }>Download</Typography>

            </CustomButtonPrimary> */}
        </FileDownloadWrap>
    );
};

const ValuedDocuments = ({ file }: fileiconProps | any) => {

    //console.log(file.files,"file");

    // const fileNameList = [
    //     {
    //         name: "AIA ESG Report 2022"
    //     },
    //     {
    //         name: "AIA Annual Results 2022"
    //     },
    //     {
    //         name: "AIA Annual Report 2021"
    //     }
    // ];
    return (
        <ValuedDocumentsStyled>
            <Container fixed>
                <Box className="document_blck">
                    <DocumentHeader title="Valued Documents" subTitle="Total documents">
                        <Button type="button" className="blur_btn">
                            {file?.files?.length ? file?.files?.length : 0} Documents
                        </Button>
                    </DocumentHeader>
                    <Box className="document_body">
                        <Typography variant="h3">File Name</Typography>
                        <Box className="filelist_otr">
                            {
                                file?.files?.length > 0 ?
                                    file?.files?.map((item: string, index: number) => (
                                        <FileDownloadItem file={item} key={index} />

                                    ))
                                    : <p>No File</p>

                            }
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Image src={assest.valuedDocumentshadow} alt="" width={384} height={437} className="valuedDocumentshadow" />
        </ValuedDocumentsStyled>
    );
};

export default ValuedDocuments;
