"use server";

import prisma from "@/db";
import { ActionError, userAction } from "@/safe-action";
import { ProductSchema } from "./product.schema";

export const createProductAction = userAction(
  ProductSchema,
  async (input, context) => {
    // verify if slug already exist
    const slugExists = await prisma.product.count({
      where: {
        slug: input.slug,
      },
    });

    if (slugExists) {
      return new ActionError("Slug already exists");
    }

    if (!context.user.id) {
      throw new Error("Unable to find user");
    }

    const product = await prisma.product.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return product;
  }
);
export const editProductAction = async () => {};
