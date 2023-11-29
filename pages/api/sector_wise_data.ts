/* eslint-disable import/export */

import axioses from "@/api/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { sector } = req.query;

    if (!sector) {
      return res.status(400).json({ error: "Sector parameter is required" });
    }

    // Fetch data from the external API using the sector parameter
    const externalApiResponse = await axioses.get(
      `/sector_data?sector=${sector}`
    );
    // Extract the relevant data from the external API response
    const { data } = externalApiResponse;

    // Respond with the extracted data
    res.status(200).json(data);
  } catch (error: any) {
    //console.error('Error in API route:', error.message);
    console.log(error);
    if (error.response.status === 500)
      res.status(500).json({ error: "Internal Server Error" });
    else {
      res.status(error.response.status).json(error.response.data);
    }
  }
};
