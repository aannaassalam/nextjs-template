/* eslint-disable import/export */

import axioses from "@/api/axios";
import { NextApiRequest, NextApiResponse } from "next";
// import { sectors } from "../index";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Fetch data from the external API using the sector parameter
    // console.log(req.headers);
    const { data: sectors } = await axios.get(
      `${req.headers.referer?.includes("https") ? "https://" : "http://"}${
        req.headers.host
      }/api/all_sectors`
    );
    const externalApiResponse = await Promise.all(
      sectors
        .filter((_sec: string) => _sec !== "null")
        .map((_sector: string) =>
          axioses.get(`/sector_data?sector=${encodeURIComponent(_sector)}`)
        )
    );

    // Extract the relevant data from the external API response
    const data = externalApiResponse.map((_external) => _external.data.payload);

    // Respond with the extracted data
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    //console.error('Error in API route:', error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
