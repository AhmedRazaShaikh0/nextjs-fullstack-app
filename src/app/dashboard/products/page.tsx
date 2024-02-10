import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/user.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Samsung
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>13.01.2023</td>
            <td>23</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
