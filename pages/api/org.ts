import axioses from "@/api/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Fetch data from the external API using the sector parameter
    const externalApiResponse = await axioses.get(`/all_orgs`);

    // Extract the relevant data from the external API response
    const { data } = externalApiResponse;

    res.status(200).json({ message: "Hello from Next.js!", data });
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error("Error in API route:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
