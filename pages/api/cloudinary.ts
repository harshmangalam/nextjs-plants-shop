import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";

const Cloudinary = cloudinary.v2;

Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const publicId = req.body;
      const response = await Cloudinary.uploader.destroy(publicId);
      if (response.result === "ok") {
        return res.status(200).json({ message: "Image removed successfully" });
      }
      return res.status(400).json({ error: "Error while removing image" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}
