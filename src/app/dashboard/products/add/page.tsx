import React from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" placeholder="price" id="price" />
        <input type="number" name="stock" placeholder="stock" id="stock" />
        <input type="text" name="color" placeholder="color" id="color" />
        <input type="text" name="size" placeholder="size" id="size" />
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
