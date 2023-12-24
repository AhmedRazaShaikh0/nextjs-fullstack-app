"use client";
import React from "react";
import styles from "../menuLink/menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }: any) {

  const pathname = usePathname();
  // console.log("pathname", pathname);

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
}
