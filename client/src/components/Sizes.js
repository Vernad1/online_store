import React from "react";
import styles from "./Sizes.module.css";

export default function Sizes({ selectSize, selectedSize }) {
  console.log(selectedSize);
  return (
    <div className={styles.sizes}>
      <div
        style={
          selectedSize == "s"
            ? { border: "2px solid #000" }
            : { backgroundColor: "white" }
        }
        onClick={() => selectSize("s")}
        className={styles.size}
      >
        s
      </div>
      <div
        style={
          selectedSize == "m"
            ? { border: "2px solid #000" }
            : { backgroundColor: "white" }
        }
        onClick={() => selectSize("m")}
        className={styles.size}
      >
        m
      </div>
      <div
        style={
          selectedSize == "l"
            ? { border: "2px solid #000" }
            : { backgroundColor: "white" }
        }
        onClick={() => selectSize("l")}
        className={styles.size}
      >
        l
      </div>
      <div
        style={
          selectedSize == "xl"
            ? { border: "2px solid #000" }
            : { backgroundColor: "white" }
        }
        onClick={() => selectSize("xl")}
        className={styles.size}
      >
        xl
      </div>
    </div>
  );
}
