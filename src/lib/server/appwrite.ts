import { Client, Databases, Account } from "appwrite";

export const config = {
  APPWRITE_ENDPOINT: ({}).NEXT_PUBLIC_APPWRITE_ENDPOINT,
  APPWRITE_PROJECT: ({}).NEXT_PUBLIC_APPWRITE_PROJECT,
};

const client = new Client();
client
  .setEndpoint(config.APPWRITE_ENDPOINT)
  .setProject(config.APPWRITE_PROJECT);

export const account = new Account(client);
export const database = new Databases(client);