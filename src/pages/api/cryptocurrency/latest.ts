import { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/shared/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  console.log(req);
  const { data } = await api.get("cryptocurrency/listings/latest");
  res.status(200).json(data);
}
