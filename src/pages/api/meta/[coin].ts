import { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/shared/api";
import { AxiosError } from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { coin } = req.query;
    const { data } = await api.get("v2/cryptocurrency/info", {
      params: {
        id: coin,
      },
    });
    res.status(200).json(data);
  }
  catch (e) {
    const error = e as AxiosError;
    res.status(error.status || 500).json({ statusCode: error.status, message: error.message });
  }
}
