import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URL;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let connectDB = conn.db("sample_training");

export default connectDB;