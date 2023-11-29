import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

import axioses from "../axios";

interface TermsRoot {
  status: number;
  message: string;
  data: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
  };
}

export const fetchTermsAndConditions = async () => {
  const res = await ApiRequest.get(endpoints.cms.termsandcondition);
  return res as TermsRoot;
};

export const fetchAboutUs = async () => {
  const res = await ApiRequest.get(endpoints.cms.about_us);
  return res as TermsRoot;
};

interface Root {
  status: number;
  message: string;
  data: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
  };
}

export interface data {
  _id: string;
  date: string;
  title: string;
  link: string;
}
export interface Webinar {
  status: number;
  type: string;
  message: string;
  data: data[];
}

// Faq
export const fetchPrivacyPolicy = async () => {
  const res = await ApiRequest.get(endpoints.cms.privacypolicy);
  return res as Root;
};

export const fetchAllSectorResource = async () => {
  const res = await ApiRequest.get(endpoints.cms.all_resource);
  return res as Root;
};

export const fetchWebinar = async () => {
  const res = await ApiRequest.get(endpoints.cms.webinar);
  return res as Webinar;
};

export interface HomepageSection1 {
  heading: string;
  sub_heading: string;
}

export interface HomepageSection2 {
  heading: string;
  description: string;
  button_1: string;
  button_2: string;
  image: string;
}

interface ContentOne {
  image: string;
  heading: string;
  description: string;
}

interface ContentTwo {
  image: string;
  heading: string;
  description: string;
}

interface ContentThree {
  image: string;
  heading: string;
  description: string;
}

export interface HomepageSection3 {
  heading: string;
  sub_heading: string;
  content_one: ContentOne;
  content_two: ContentTwo;
  content_three: ContentThree;
}

export interface HomepageSection4 {
  heading: string;
  sub_heading: string;
  description: string;
  image: string;
}

export interface HomepageSection5 {
  heading: string;
  sub_heading: string;
}

export interface HomepageData {
  [x: string]: any;
  _id: string;
  section1: HomepageSection1;
  section2: HomepageSection2;
  section3: HomepageSection3;
  section4: HomepageSection4;
  section5: HomepageSection5;
  updatedAt: string;
}

export interface Homepage {
  status: number;
  type: string;
  message: string;
  data: HomepageData;
}

export const fetchHomepage = async () => {
  const res = await axiosInstance.get(endpoints.cms.homepage);
  return res.data;
};

export interface TestimonialData {
  _id: string;
  name: string;
  text: string;
}

export interface TestimonialRoot {
  status: number;
  type: string;
  message: string;
  data: TestimonialData[];
}

export const fetchTestimonials = async () => {
  const res = await axiosInstance.get(endpoints.cms.testimonial);
  return res?.data;
};

export interface SocialMediaRoot {
  status: number;
  type: string;
  message: string;
  data: any[];
}

export const fetchSocialMediaUrls = async () => {
  const res = await axiosInstance.get(endpoints.cms.socialMedia);
  return res?.data;
};

export const fetchFaq = async () => {
  const res = await axiosInstance.get(endpoints.cms.faq);
  return res?.data;
};

export interface ContactBody {
  full_name?: string;
  email: string;
  phone: string;
  message: string;
  name?: string;
}

export interface ContactPdF {
  name: string;
  email: string;
  company_info: string;
  docuument: string | any;
}

export const contactUs = async (data: ContactBody) => {
  const res = await axiosInstance.post(endpoints.cms.contact, data);
  return res;
};

export const scheduleMeeting = async (data: ContactBody) => {
  const res = await axiosInstance.post(endpoints.cms.schedule_meeting, data);
  return res;
};

export const claimProfile = async (data: ContactBody) => {
  const res = await axiosInstance.post(endpoints.cms.claim_profile, data);
  return res;
};

// Sector
export const GetSector = async () => {
  const _res = await axioses.get(`${endpoints.cms.sector}`);

  return _res;
};

// sector wise
export const GetSectorByName = async (params: any) => {
  const _res = axioses
    .get(`${endpoints.cms.sectorData}`, { params })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return _res;
};

// orgnization name wise
export const GetOrganizationByName = async (params: any) => {
  const _res = axioses
    .get(`${endpoints.cms.organizationData}`, { params })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return _res;
};

export const GetOrganizations = async () => {
  const _res = axioses
    .get(`${endpoints.cms.sector}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return _res;
};

export const fetchSectorWiseDocuments = async (
  sector_name: string = "Information Technology"
) => {
  const res = await axiosInstance.post(
    endpoints.cms.sector_document_individual,
    { sector_name }
  );
  return res;
};

export const fetchSectorDocuments = async () => {
  const res = await axiosInstance.get(endpoints.cms.sector_documents);
  return res;
};

export const pdfForm = async (data: ContactPdF) => {
  const res = await axiosInstance.post(endpoints.cms.pdfform, data);
  return res;
};
