import React from "react";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/700.css";
import styles from "./Background.module.css"

const Background = (props) => {
  return <div className={styles.background}>{props.children}</div>;
};

export default Background;
