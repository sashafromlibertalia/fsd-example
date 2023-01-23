import { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/shared/api";
import { AxiosError } from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { data } = await api.get("cryptocurrency/listings/latest");
    res.status(200).json(data);
  }
  catch (e) {
    const error = e as AxiosError;
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
