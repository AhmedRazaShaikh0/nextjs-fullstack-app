// import { connectToDB } from "./utils";

// export async function addUser(FormData) {
//   "use server";
//   const { username, email, password, address, phone, isAdmin, isActive } =
//     Object.fromEntries(FormData);
//   try {
//     connectToDB();
//     const newUser = new User({
//       username,
//       email,
//       password,
//       address,
//       phone,
//       isAdmin,
//       isActive,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     throw new Error("Failed to create user!");
//   }
// }

// actions.js
import { connectToDB } from "./utils";

export async function addUser(FormData) {
  const { username, email, password, address, phone, isAdmin, isActive } = Object.fromEntries(FormData);
  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      address,
      phone,
      isAdmin,
      isActive,
    });
    // Perform any other necessary operations
  } catch (error) {
    console.error("Error", error);
    throw new Error("Failed to create user!");
  }
}
export function useServer() {} // Exporting an empty useServer function to satisfy the requirement
