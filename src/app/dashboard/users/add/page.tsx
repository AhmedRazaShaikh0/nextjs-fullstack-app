// import { addUser } from "@/app/lib/actions";
// import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

// export default function page() {
//   return (
//     <div className={styles.container}>
//       <form action={addUser} className={styles.form}>
//         <input type="text" placeholder="username" name="username" required />
//         <input type="email" placeholder="email" name="email" required />
//         <input
//           type="password"
//           placeholder="password"
//           name="password"
//           required
//         />
//         <input type="phone" placeholder="phone" name="phone" required />
//         <select name="isAdmin" id="isAdmin">
//           <option value={false}>Is Admin?</option>
//           <option value={true}>Yes</option>
//           <option value={false}>No</option>
//         </select>
//         <select name="isActive" id="isActive">
//           <option value={true}>Is Active?</option>
//           <option value={true}>Yes</option>
//           <option value={false}>No</option>
//         </select>
//         <textarea
//           name="address"
//           id="address"
//           rows={16}
//           placeholder="Address"
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

export default function Page() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    isActive: true,
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(formData);
      // Handle success or redirect user
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="isAdmin"
          id="isAdmin"
          value={formData.isAdmin}
          onChange={handleChange}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          value={formData.isActive}
          onChange={handleChange}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
