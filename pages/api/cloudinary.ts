import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import cloudinary from "cloudinary";

const Cloudinary = cloudinary.v2;

Cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { publicId } = req.query;
    const data = await Cloudinary.uploader.destroy(publicId);
    return res.status(200).json({ message: "Image removed successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
