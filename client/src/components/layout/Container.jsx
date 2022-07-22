import React from "react";
import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <div className={styles.flexbox}>
      <div className={`${styles.container} ${props.className}`}>{props.children}</div>
    </div>
  );
};

export default Container;
