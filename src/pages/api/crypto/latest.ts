import { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/shared/api";
import { AxiosError } from "axios";

const limit = 5;

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { page } = req.query;
    const { data } = await api.get("v1/cryptocurrency/listings/latest", {
      params: {
        start: (+(page || 1) - 1) * limit + 1,
        limit,
      },
    });

    res.status(200).json(data);
  }
  catch (e) {
    const error = e as AxiosError;
    res.status(error.status || 500).json({ statusCode: error.status, message: error.message });
  }
}
