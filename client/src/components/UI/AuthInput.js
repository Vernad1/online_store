import React from "react";
import styles from "./AuthInput.module.css";

export default function AuthInput({ text, onChange, type, placeholder }) {
  return (
    <>
      <label className={styles.label} htmlFor={text}>
        {text}:
      </label>
      <input
        className={styles.input}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={text}
      ></input>
    </>
  );
}
