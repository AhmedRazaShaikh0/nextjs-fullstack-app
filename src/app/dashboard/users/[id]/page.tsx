import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.png" alt="" width={300} height={300} />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Johndoe@gmail.com" />
          <label>Password</label>
          <input type="password" name="password"/>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123456789" />
          <label>Address</label>
          <input type="text" name="address" placeholder="New York" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
