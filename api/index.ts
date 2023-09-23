
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = "C52t390Q8f4qFws9q7vgCyaOUtAlPkGzmtWcogVY";
const headers = {
  "X-API-KEY": apiKey,
  // "Content-Type": "application/json;charset=UTF-8",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers,
    })
  const prefs = await response.json();
  res.status(200).json({ prefs });
}
