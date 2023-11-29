import axioses from "@/api/axios";
import { NextApiRequest, NextApiResponse } from "next";

interface allSector {
  [key: string]: number;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Fetch data from the external API using the sector parameter
    const externalApiResponse = await axioses.get(`/all_orgs`);

    // Extract the relevant data from the external API response
    const { data } = externalApiResponse;

    const _data: allSector = {};
    data?.payload.forEach((_org: { org_sector: string }) => {
      _data[_org.org_sector] = 1;
    });
    const all_sectors = Object.keys(_data).filter(
      (_sec: string) => _sec !== "null"
    );

    // Respond with the extracted data
    res.status(200).json(all_sectors);
  } catch (error) {
    // eslint-disable-next-line no-console
    //console.error('Error in API route:', error.message);
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
