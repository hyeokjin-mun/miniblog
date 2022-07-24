import React, { useState } from "react";
import "@fontsource/courgette";
import "@fontsource/noto-sans-kr";

import { Link } from "react-router-dom";
import { ToastContainer, Toast } from "react-toastify";
import axios from 'axios'


import styles from '../components/UI/LoginSignup.module.css'
import Container from "../components/layout/Container";


export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
  }


  return (
    <React.Fragment>
      <Container className={styles.register}>
        <h1>LOGIN</h1>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles.div}>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="아이디"
            />
          </div>
          <div className={styles.div}>
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
            />
          </div>
          <button type="submit">LOGIN</button>
          <span>
            MiniLog가 처음이신가요?{" "}
            <Link to="/register" className={styles.link}>
              SIGN UP
            </Link>
          </span>
        </form>
      </Container>
      <ToastContainer></ToastContainer>
    </React.Fragment>
  );
}
