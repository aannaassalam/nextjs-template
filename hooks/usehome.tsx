import { endpoints } from "@/api/endpoints";
import axioses from "@/api/axios";

// Sector
// sector wise
export const GetSectorByName = async (params: any) => {
  const _res = axioses
    .get(`${endpoints.cms.sectorData}`,{ params })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return _res;
};