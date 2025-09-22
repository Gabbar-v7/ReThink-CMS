import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongoClient, mongodb } from "cross-kit/db";

export const auth = betterAuth({
    database: mongodbAdapter(mongodb, { client: mongoClient }),
});