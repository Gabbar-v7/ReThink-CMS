import { MongoClient } from "mongodb";

const MONGODB_URL = process.env.MONGODB_URL
if (!MONGODB_URL) throw new Error("Missing mongodb url: MONGODB_URL")

export const mongoClient = new MongoClient(MONGODB_URL)

export const mongodb = mongoClient.db()