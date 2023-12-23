import React from "react";
import styles from "../sidebar/sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdDashboard />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdDashboard />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdDashboard />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdDashboard />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdDashboard />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdDashboard />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/user.png" alt="" width={50} height={50} className={styles.userImage} />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Ahmed Raza</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cate, index) => (
          <li key={index} className={styles.listItem}>
            <span className={styles.cate}>{cate.title}</span>
            {cate.list.map((item, index) => (
              <MenuLink item={item} key={index} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
