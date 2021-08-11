import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://sahil:WZcTXqMBkywjNb3g@cluster0.vj0pv.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
