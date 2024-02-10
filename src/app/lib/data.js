import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("🚀 ~ fetchUsers ~ error:", error)
    throw new Error(error);
  }
};
