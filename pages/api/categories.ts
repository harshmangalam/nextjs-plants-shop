/**
 * Category api
 *
 */

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // create new category
      let { name, description, images } = JSON.parse(req.body);

      const category = await prisma.category.create({
        data: {
          name,
          description,
          images,
        },
      });

      return res.status(201).json({
        message: "Category created successfully",
        category,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error while creating category",
      });
    }
  }

  // delete category

  if (req.method === "DELETE") {
    try {
      const categoryId = req.body;

      const category = await prisma.category.delete({
        where: {
          id: categoryId,
        },
      });
      console.log(category)
      return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error while deleting category" });
    }
  }
}
