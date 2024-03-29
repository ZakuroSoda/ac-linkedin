"use client"

import { signOut } from "next-auth/react"
import styles from "./page.module.css"
import Field from "@/components/formField/Field"

export default function page() {
  return (
    <>
      <div className={styles.text}>
        <h1 className={styles.heroText}>
          Welcome to AC-LinkedIn.
        </h1>
        <a onClick={() => signOut()}>Sign out by link</a>
      </div>
    </>
  );
}
