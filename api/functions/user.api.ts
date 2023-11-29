import { IgetSignUpQuery } from "@/interface/apiresp.interfaces";
import { IFormInput } from "@/interface/common.interface";
import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const signUpMutation = async (body: IFormInput) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.profileUpdate,
    body
  );
  return res;
};
export const loginMutation = async (body: IFormInput) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.profileUpdate,
    body
  );
  return res;
};
export const GetProfileDetails = async () => {
  const res = await axiosInstance.get<IgetSignUpQuery>(
    endpoints.auth.profileUpdate
  );
  return res;
};
export const signUpProfileMutation = async (body: IFormInput) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.profileUpdate,
    body
  );
  return res;
};

export const ProfileUpdateMutation = async (body: IFormInput) => {
  try {
    const res = await ApiRequest.post<IgetSignUpQuery>(
      endpoints.auth.profileUpdate,
      body
    );

    return res;
  } catch (error) {
    return error;
  }
};
