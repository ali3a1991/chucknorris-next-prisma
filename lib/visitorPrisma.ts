'use server'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getVisitor() {
  const visitor = await prisma.visitor.findFirst();
  return visitor?.count;
}

export async function setVisitor() {
  const visitor = await prisma.visitor.findFirst();
  let result;
  if (visitor) {
    result = await prisma.visitor.update({
      where: { id: visitor.id },
      data: { count: visitor.count + 1 },
    });
  } else {
    result = await prisma.visitor.create({
      data: {
        count: 1,
      },
    });
  }
  return result.count;
}
