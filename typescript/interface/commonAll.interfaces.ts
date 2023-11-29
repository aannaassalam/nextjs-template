import { Root } from "pages/sector";

export interface CommonHeaderProps {
  chipName?: string;
  headerTitle?: string;
  alignMiddle?: boolean;
}

export interface TestimonialCardPRops {
  description: string;
  authorName: string;
}

type scheduleListType = {
  scheduleMenu: string;
};

export interface ScheduleMeetingProps {
  children?: JSX.Element | JSX.Element[];
  buttonText?: string;
  scheduleBtn?: string;
  scheduleMeeting?: scheduleListType[];
  scheduleMeetings?: scheduleListType[];
  scheduleMeetingpara?: boolean;
  sector: string;
}

export interface homeTabItemList {
  title: string;
  starRatingValue: number;
  startNo: number;
  companyLogo: string;
  imgWidth: number;
  imgHeight: number;
  company?: string;
  score?: number;
}

export interface commonInnerSlider {
  ImagePath: string;
  ImageWidth: number;
  ImageHeight: number;
  titleTxt: string;
  // subText: string;
  dateTxts: string;
  document: string;
}

export interface Idocuments {
  document: string;
  createdAt: string;
  item: string[];
}

export interface sliderTopProps {
  IfTxtIs?: boolean;
  TitleTxtIf?: string;
  bgImgIsShow?: boolean;
  bgImgIsShowTw?: boolean;
  bgImgIsShowThree?: boolean;
  documents?: Idocuments[];
}

export interface upcominWebinrProp {
  dateTxt: string;
  titleTxt: string;
  dateFormat: string;
}

export interface scheduleMeetinProps {
  title: string;
  btnTxt: string;
  imgPath: string;
}
export interface newsLetterTxt {
  title: string;
  paraTxt: string;
}

export interface listCompanyItesm {
  imagePath: string;
  txtTitle: string;
  starRaningValue: number;
  starValue: number;
  totalStar: string;
  locationTxt: string;
  orgName: string;
  score?: number;
}

export interface industryTabList {
  titleTxtIs?: boolean;
  title2?: string;
  title: string;
  subTxt: string;
  index?: number;
}
export interface industryProps {
  industryName?: string;
  compliance?: string;
  industryLeaders?: string;
  sector_data?: Root;
  company_name: string;
  total_percent?: number;
}

export interface metricsAndTarget {
  totalPercent?: any;
  percentTxt?: string;
  company_name: string;
}
