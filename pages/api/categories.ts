import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("hi");
  try {
    if (req.method === "POST") {
      let { name, description, images } = JSON.parse(req.body);

      images = images.map((image) => image.src);
      const category = await prisma.category.create({
        data: {
          name,
          description,
          images,
        },
      });

      return res.status(201).json(category);
    }
  } catch (error) {
    console.log(error);
  }
}
