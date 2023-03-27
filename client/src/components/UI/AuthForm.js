import React from "react";
import styles from "./AuthForm.module.css";

export default function AuthForm({ children }) {
  return <form className={styles.auth__form}>{children}</form>;
}
