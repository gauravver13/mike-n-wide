import bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}




import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Get user by email from the database
 * @param email - The user's email address
 */
export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Failed to get user by email:", error);
    return null;
  }
}
