"use client";

import Link from "next/link";
import styles from "./HelpButton.module.css";

export default function HelpButton() {
  return (
    <Link href="/aid" className={styles.helpButton}>
      Допомогти
    </Link>
  );
}
