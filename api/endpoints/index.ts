export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api`;
export const baseUrlApiUrls = `${process.env.NEXT_API_BASE_URL}/api`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const mediaUrl = (url: string, path: string) => {
  return `${baseUrlMedia}/uploads/${path}/${url}`;
};

export const endpoints = {
  auth: {
    profileUpdate: "/dummy"
  },
  cms: {
    termsandcondition: "/cms/details/terms_and_condition",
    about_us: "/cms/details/about_us",
    privacypolicy: "/cms/details/privacy_policy",
    homepage: "/home-page-cms/list",
    testimonial: "/testimonial/list",
    socialMedia: "/setting/list",
    contact: "/contact-us/submit",
    schedule_meeting: "/schedul-a-meeting/submit",
    claim_profile: "/claim-profile/submit",
    sector: "/all_orgs",
    sectorData: "sector_data",
    organizationData: "org_data",
    faq: "/faq/list",
    sector_document_individual: "/sector/document/list",
    sector_documents: "/sector/all-document/list",
    pdfform: "/register/downloader/submit",
    all_resource: "/sector/get-all-sector-document/list",
    webinar: "/webinar/list"
  }
};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,
  // endpoints.auth.signUpProfile,
  // endpoints.auth.login,
  endpoints.auth.profileUpdate
];
