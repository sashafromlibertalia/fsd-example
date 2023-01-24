import { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/shared/api";
import { AxiosError } from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { data } = await api.get("v1/cryptocurrency/listings/latest");
    res.status(200).json(data);
  }
  catch (e) {
    const error = e as AxiosError;
    res.status(error.status || 500).json({ statusCode: error.status, message: error.message });
  }
}
