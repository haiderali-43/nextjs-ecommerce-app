import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

// Check if the Prisma client has already been initialized in the global scope
const dbConnect = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = dbConnect;

export default dbConnect;
