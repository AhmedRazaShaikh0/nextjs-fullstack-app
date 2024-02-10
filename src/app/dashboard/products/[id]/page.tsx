import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.png" alt="" width={300} height={300} />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Johndoe@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123456789" />
          <label>Size</label>
          <input type="text" name="size" placeholder="New York" />
          <label>Category</label>
          <select name="category" id="isAdmin">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
