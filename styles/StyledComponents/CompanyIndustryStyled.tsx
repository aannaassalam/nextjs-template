import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CompanyIndustryStyled = styled(Box)`
    position: relative;
    .industryFull{
        border-radius: 10px;
        border: 1px solid #EFECF6;
        background: #FFF;
        box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
        padding: 13px 0 50px; 
        position: relative;
        z-index: 9;
        margin-bottom: 53px;
        @media(max-width: 1199px){
            margin-bottom: 30px;
            padding: 12px 0 30px;
        }
        .industryFullHeader{
            padding: 0 38px;
            padding-bottom: 17px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 1px solid ${primaryColors?.colorEFECF6};
            @media(max-width: 1199px){
                padding: 0 20px;
            }
            @media(max-width: 899px){
                flex-wrap: wrap;
                padding: 0 ;
                margin-bottom: 20px;
            }
            h3{
                color: ${primaryColors?.backGroundColorPurple};
                font-size: 20px;
                font-weight: 600;
                @media(max-width: 1199px){
                    font-size: 16px;
                }
                @media(max-width: 479px){
                    font-size: 14px;
                }
            }
            .industryFullHeaderLeft{ 
                max-width: 376px;
                flex-basis: 376px;
                @media(max-width: 899px){
                    max-width: 100%;
                    flex-basis: 100%;
                    padding-bottom: 10px;
                }
            }
            .industryFullHeaderRight{
                max-width: calc(100% - 376px);
                flex-basis: calc(100% - 376px);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding-left: 123px;
                @media(max-width: 1199px){
                    padding-left: 20px;
                    justify-content: space-between;
                }
                @media(max-width: 899px){
                    max-width: 100%;
                    flex-basis: 100%;
                    padding: 20px 0;
                }
                /* @media(max-width: 479px){
                    flex-wrap: wrap;
                } */
                .MuiStack-root{
                    padding-right: 145px;
                    @media(max-width: 1199px){
                        padding-right: 40px;
                    }
                    @media(max-width: 599px){
                        padding-right: 10px;
                    }
                    /* @media(max-width: 479px){
                        width: 100%;
                        padding: 0 0 20px;
                    } */

                    img{
                        margin-right: 10px;
                        @media(max-width: 479px){
                            width: 30px;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }

        .industryFullBody{
            padding: 33px 35px 0 39px;
            @media(max-width: 1199px){
                padding: 20px 15px;
            }
            @media(max-width: 899px){
                flex-wrap: wrap;
            }
            .industryFullBodyLeft{
                max-width: 376px;
                flex-basis: 376px;
                @media(max-width: 899px){
                    max-width: 100%;
                    flex-basis: 100%;
                }
                .MuiStack-root{
                    &:not(:last-child){
                        margin-bottom: 20px;
                    }
                    .bodyIcon{
                        max-width: 24px;
                        flex-basis: 24px;
                    }
                    .bodyTxt{
                        max-width: calc(100% - 24px);
                        flex-basis: calc(100% - 24px);
                        padding-left: 15px;
                        @media(max-width: 1199px){
                            padding-left: 20px;
                        }
                        p{
                            color: ${primaryColors?.color271E3C};
                            font-size: 16px;
                            font-weight: 500;
                            margin-bottom: 16px;
                            max-width: 275px;
                            line-height: 1.4;
                            @media(max-width: 1199px){
                                font-size: 14px;
                            }
                        }
                        .progressBar{
                            position: relative;
                            > * {
                                display: block;
                            }
                            .MuiLinearProgress-root{
                                height: 6px;
                                border-radius: 10px;
                            }
                            .MuiTypography-root{
                                position: absolute;
                                top: -39px;
                                right: 0;
                                margin: 0;
                                @media (max-width:575px) {
                                    top: -20px;   
                                }
                            }
                        }
                        
                    }
                }
            }

            .industryFullBodyRight{
                max-width: calc(100% - 376px);
                flex-basis: calc(100% - 376px);
                padding-left: 123px;
                @media(max-width: 1199px){
                    padding-left: 20px;
                }
                @media(max-width: 899px){
                    max-width: 100%;
                    flex-basis: 100%;
                    padding: 20px 0 0;
                    margin-top: 20px;
                }
                .industryLeader{
                    border-radius: 10px;
                    background: #F9F8FD;
                    padding: 22px 18px;
                    width: 100%;
                    align-items: flex-end;
                    @media(max-width: 1199px){
                        padding: 20px 12px;
                    }
                    @media (max-width: 599px) {
                        width: 100%;
                        flex-wrap: wrap;
                    }
                    .industryLeaderTxt{
                        max-width: 247px;
                        flex-basis: 247px;
                        @media (max-width:575px) {
                            max-width: 100%;
                            flex-basis: 100%; 
                            margin-bottom:10px;
                        }
                        .industryLeaderTxtIcon{
                            background: ${primaryColors?.colorECE8F3};
                            width: 48px;
                            height: 48px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;     
                        }
                        .MuiStack-root{
                            padding-left: 15px;                            
                            h4{
                                color: ${primaryColors?.black};
                                font-size: 16px;
                                font-weight: 600;
                                margin-bottom: 10px;
                                @media(max-width: 1199px){
                                    font-size: 14px;
                                }
                            }
                            p{
                                color: ${primaryColors?.mainFontColor};
                                font-size: 15px;
                                font-weight: 400;
                                @media(max-width: 1199px){
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .industryLeaderProgress{
                        max-width: calc()100% - 247px;
                        flex-basis: calc(100% - 247px);
                        position: relative;
                        @media (max-width:575px) {
                            max-width: 100%;
                            flex-basis: 100%;   
                        }
                        > *{
                            display: block;
                        }
                        .MuiLinearProgress-root{
                            height: 6px;
                            border-radius: 10px;
                            background: ${primaryColors?.colorDCD7E9};
                            margin-bottom: 7px;
                            .MuiLinearProgress-bar{
                                background-color: ${primaryColors?.color6A559A};
                                border-radius: 10px;
                            }
                        }
                        .MuiTypography-body2{
                            color: ${primaryColors?.color6A559A};
                            font-size: 16px;
                            font-weight: 400;
                            position: absolute;
                            top: -40px;
                            right: 0;
                            @media(max-width: 1199px){
                                    font-size: 14px;
                                }
                        }
                    }
                }

                .companyCard{
                    padding-top: 33px;
                    @media(max-width: 899px){
                        padding-top: 20px;
                    }
                    .MuiStack-root{
                        flex-wrap: wrap;
                        &:not(:last-child){
                            margin-bottom: 42px;
                            @media(max-width: 899px){
                                margin-bottom: 20px;
                            }
                        }
                        .companyCardTxt{
                            max-width: 267px;
                            flex-basis: 267px;
                            display: flex;
                            align-items: center;
                            @media (max-width:575px) {
                                max-width: 100%;
                                flex-basis: 100%;
                                margin-bottom: 10px;
                            }
                            img{
                                margin-right: 18px;
                            }
                            h4{
                                color: ${primaryColors?.color271E3C};
                                font-size: 20px;
                                font-weight: 400;
                                @media(max-width: 1199px){
                                    font-size: 14px;
                                }
                            }
                        }
                        .companyCardProgress{
                            max-width: calc(100% - 267px);
                            flex-basis: calc(100% - 267px);
                            position: relative;
                            @media (max-width:575px) {
                                max-width: 100%;
                                flex-basis: 100%;
                            }
                            > *{
                                display: block;
                            }
                            .MuiLinearProgress-root{
                                height: 6px;
                                border-radius: 10px;
                                background: ${primaryColors?.colorDCD7E9};
                                margin-bottom: 7px;
                                .MuiLinearProgress-bar{
                                    background-color: ${primaryColors?.color6A559A};
                                    border-radius: 10px;
                                }
                            }
                            .MuiTypography-body2{
                                color: ${primaryColors?.color6A559A};
                                font-size: 16px;
                                font-weight: 400;
                                position: absolute;
                                top: -40px;
                                right: 0;
                                @media(max-width: 1199px){
                                    font-size: 14px;
                                    top: -30px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .requestReport{
            padding-top: 45px;
            @media(max-width: 1199px){
                padding-top: 25px;
            }
            @media(max-width: 899px){
                padding-top: 15px;
            }
            h3{
                color: #271E3C;
                font-size: 20px;
                font-weight: 600;
                @media(max-width: 1199px){
                    font-size: 14px;
                }
            }
            button{
                min-width: 165px;
                padding: 12px 27px;
                margin-top: 17px;
            }
        }
    }

    .blueShadow{
        position: absolute;
        top: 20%;
        left: 2%;
        z-index: 1;
    }
    .yellowShadow{
        position: absolute;
        right: 4%;
        top: 4%;
        z-index: 1;
    }
    .orangeRoundBig{
        position: absolute;
        top: -16%;
        right: 7%;
        z-index: -2;
        @media(max-width: 1199px){
            width: 150px;
            right: 2%;
            top: -10%;
        }
        @media(max-width: 599px){
            width: 120px;
            right: 2%;
            top: -10%;
        }
    }
    .orangeRoundSmall{
        position: absolute;
        bottom: 30%;
        left: 4%;
        z-index: 1;
    }

    .class1{
        background: ${primaryColors?.colorFEF8E0};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.primary};
        }
    }
    .class2{
        background: ${primaryColors?.colorFDE1D9};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.primaryOrange};
        }
    }
    .class3{
        background: ${primaryColors?.colorE3F2F1};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.color75C0BB};
        }
    }
    .class4{
        background:${primaryColors?.colorFEF8E0};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.primary};
        }
    }
    .class5{
        background:${primaryColors?.colorFDE1D9};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.primaryOrange};
        }
    }
    .class6{
        background: ${primaryColors?.colorE3F2F1};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.color75C0BB};
        }
    }
    .class7{
        background: ${primaryColors?.colorFDE1D9};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.primaryOrange};
        }
    }
    .class8{
        background:${primaryColors?.colorFDE1D9};
        .MuiLinearProgress-bar{
            background: ${primaryColors?.primaryOrange};
        }
    }

    .industryFullHeaderRightDsktp{
        display: block;
        @media (max-width:899px) {
            display: none !important;
        }
    }

    .industryFullHeaderRightMobile{
        display: none !important;
        @media (max-width:899px) {
            display: flex !important;
        }
    }
`