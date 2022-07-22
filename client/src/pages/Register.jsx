import React from "react";
import Container from "../components/layout/Container";
import styles from "./Register.module.css";
import "@fontsource/courgette";
import "@fontsource/noto-sans-kr";


export default function Register() {
  return (
      <Container className={styles.register}>
        <h1>JOIN US</h1>
        <form action="" className={styles.form}>
          <div className={styles.div}>
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="your@email.adress" />
          </div>
          <div className={styles.div}>
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button type="submit">SIGN UP</button>
        </form>
      </Container>
  );
}
