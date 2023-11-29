import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const WrapperAllIndustry = styled(Box)`
padding: 80px 0 0;
@media(max-width: 1199px){
    padding: 60px 0 0;
}
@media(max-width: 599px){
    padding: 40px 0 0;
}
.mainSec_industryChart{
    position: relative;
    padding-bottom: 80px;
    @media(max-width: 1199px){
        padding-bottom: 60px;
    }
    @media(max-width: 899px){
        padding-bottom: 40px;
    }
    .all_wrapper_topIns{
        position: relative;
        .imgWrapMains{
            position: absolute;
            right: -150px;
            top: -120px;
            max-width: 400px;
            width: 100%;
            pointer-events: none;
            img{
                width: 100%;
            }
        }
        .imgWrapMainsTw{
            position: absolute;
            left: -150px;
            top: 120px;
            max-width: 400px;
            width: 100%;
            img{
                width: 100%;
            }
        }
        .imgWrapMainsThree{
            position: absolute;
            left: -150px;
            top: 160px;
            max-width: 25px;
            width: 100%;
            img{
                width: 100%;
            }
        }
        
    }
    .top_chartMain{
        border-radius: 10px;
        border: 1px solid ${primaryColors.colorEFECF6};
        background: ${primaryColors.white};
        box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
        padding: 30px;
       position: relative;
       z-index: 1;
       @media(max-width: 899px){
        padding: 20px;
       }
       @media(max-width: 599px){
        padding: 10px;
       }
    }
    .topPart_titele{
            position: relative;
            h2{
                font-size: 20px;
                font-weight: 600;
                color: ${primaryColors.textPrimaryColor};
                max-width: 530px;
                margin: 0 auto 9px 0;
                line-height: 1.2;
                @media(max-width: 599px){
                    font-size: 18px;
                }
            }
            p{
                font-size: 15px;
                font-weight: 400;
                color: ${primaryColors.mainFontColor};
            }
            .MuiChip-root{
                border-radius: 18px;
                margin-bottom: 14px;
            }
        }
    .wrapper_chartTwBtm{
        border-radius: 10px;
        border: 1px solid ${primaryColors.colorEFECF6};
        background: ${primaryColors.white};
        box-shadow: 0px 14px 51px -18px rgba(0, 0, 0, 0.08);
        padding: 20px 30px;
        margin-top: 30px;
        @media(max-width: 1199px){
            padding: 20px 15px;
        }
    }
}
.mainWrap_last{
        position: relative;
        .imgWrapMainsBtms{
            position: absolute;
            right: -50px;
            bottom: 20px;
            max-width: 25px;
            width: 100%;
            img{
                width: 100%;
            }
        }
        .imgWRapper_oneTw{
            position: absolute;
            bottom: -100px;
            left: -120px;
            @media(max-width: 1199px){
                left: -20px;
                width: 100px;
                bottom: -20px;
            }
        }
        .shapeImgOne {
            position: absolute;
            top: 100px;
            left: -100px;
            max-width: 300px;
            img {
            width: 100%;
            }
        }
        .shapeImgNines{
            position: absolute;
            top: 100px;
            right: -150px;
            max-width: 200px;
            @media(max-width: 1199px){
                max-width: 60px;
                right: -60px;
            }
            img {
            width: 100%;
            }
        }
    }
.mainWrapper_inner{
    position: relative;
    padding: 70px 0 160px;
    @media(max-width: 1199px){
        padding: 60px 0 80px;
    }
    @media(max-width: 899px){
        padding: 40px 0;
    }
    background: rgba(250, 250, 250, 1);
    .wrapperAll_listSingle{
        &:not(:last-child){
            margin-bottom: 20px;
        }
    }
    .topTitle_wrapperIns{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        @media(max-width: 1199px){
            margin-bottom: 20px;
        }
        @media(max-width: 374px){
            flex-wrap: wrap;
        }
        h2{
            color: ${primaryColors.textPrimaryColor};
            font-size: 20px;
            font-weight: 600;
            @media(max-width: 599px){
                font-size: 18px;
            }
        }
        
        .filterWrap{
            .MuiButtonBase-root{
                border-radius: 65px;
                border: 1px solid ${primaryColors.primaryOrange};
                background: ${primaryColors.white};
                min-width: 120px;
                display: flex;
                align-items: center;
                font-size: 12px;
                font-weight: 600;
                color: ${primaryColors.textPrimaryColor};
                @media(max-width: 374px){
                    min-width: auto;
                    padding: 6px 15px;
                }
                svg{
                    margin-left: 10px;
                }
                &:hover{
                    background: ${primaryColors.textPrimaryColor};
                    color: ${primaryColors.primaryOrange};
                    border-color: ${primaryColors.textPrimaryColor};
                }
            }
        }
    }
}

.chartMain{
    @media(max-width: 1199px){
        margin-top: 30px;
    }
}

`