/**
 * Plant api
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
    // get plant data from body
    const { name, images, description, price, categoryId } = JSON.parse(
      req.body
    );
    try {
      // create new plant
      const newPlant = await prisma.plant.create({
        data: {
          name,
          images,
          description,
          price: Number(price),
          categoryId,
        },
        select: {
          id: true,
          quantity: true,
        },
      });

      //   incr the quantity by 1
      await prisma.plant.update({
        where: {
          id: newPlant.id,
        },
        data: {
          quantity: newPlant.quantity + 1,
        },
      });

      return res.status(200).json({ message: "Plant created successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error while creating plant" });
    }
  }

  if (req.method === "PUT") {
    // get plant data from body
    const { id, name, images, description, price, categoryId } = JSON.parse(
      req.body
    );
    try {
      // create new plant
      await prisma.plant.update({
        where: {
          id,
        },
        data: {
          name,
          images,
          description,
          price: Number(price),
          categoryId,
        },
        select: {
          id: true,
        },
      });

      return res.status(200).json({ message: "Plant updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error while updating plant" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const  plantId  = req.body;
      const plant = await prisma.plant.findUnique({
        where: {
          id: plantId,
        },
      });

      if (!plant) {
        return res.status(404).json({ error: "Plant not found" });
      }
      await prisma.plant.delete({
        where: {
          id: plantId,
        },
      });
      return res.status(200).json({ message: "Plant deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while deleting plant" });
    }
  }
}
