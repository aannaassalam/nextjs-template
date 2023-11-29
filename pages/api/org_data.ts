import axioses from "@/api/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { org_name } = req.query;

    if (!org_name) {
      return res
        .status(400)
        .json({ error: "orgnization parameter is required" });
    }

    // Fetch data from the external API using the sector parameter
    const externalApiResponse = await axioses.get(
      `/org_data?org_name=${org_name}`
    );

    // Extract the relevant data from the external API response
    const { data } = externalApiResponse;

    // Respond with the extracted data
    res.status(200).json(data);
  } catch (error) {
    // res.redirect(307, "/404")
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
