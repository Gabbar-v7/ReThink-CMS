import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongoClient, mongodb } from "cross-kit/db";

export const auth = betterAuth({
    baseURL: process.env.BASE_URL,
    database: mongodbAdapter(mongodb, { client: mongoClient }),
});