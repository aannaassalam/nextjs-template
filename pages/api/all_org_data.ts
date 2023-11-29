import axioses from "@/api/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Fetch data from the external API using the sector parameter
    const externalApiResponse = await axioses.get(`/all_orgs`);

    // Extract the relevant data from the external API response
    const { data } = externalApiResponse;

    // Respond with the extracted data
    res.status(200).json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    //console.error('Error in API route:', error.message);
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
