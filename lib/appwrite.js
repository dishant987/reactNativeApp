import { router } from "expo-router";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.dishant.aora",
  projectId: "66a293240035266492ea",
  databaseId: "66a2946f0013e224284d",
  useCollectionId: "66a2949a0030ca9d9a2c",
  videoCollectionId: "66a2949a0030ca9d9a2c",
  storageId: "66a2966f000bb4ecfc4f",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarsUrl = avatars.getInitials(username);

    // await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.useCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarsUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log(session);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.useCollectionId,
      [Query.equal("acountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;
    console.log("current User ==============>   ", currentUser);
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}