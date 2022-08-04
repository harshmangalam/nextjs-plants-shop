/**
 * Category api
 * edit
 * delete
 * create
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

      return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error while deleting category" });
    }
  }

  if (req.method === "PUT") {
    try {
      // edit  category
      let { id, name, description, images } = JSON.parse(req.body);

      // check category exist or not
      const category = await prisma.category.findUnique({
        where: {
          id,
        },
      });

      // return not found error in case if category not found
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      await prisma.category.update({
        where: {
          id,
        },
        data: {
          name,
          images,
          description,
        },
      });

      return res.status(201).json({
        message: "Category updated successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error while creating category",
      });
    }
  }
}
