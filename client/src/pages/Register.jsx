import React, { useState } from "react";
import Container from "../components/layout/Container";
import styles from "../components/UI/LoginSignup.module.css";
import "@fontsource/courgette";
import "@fontsource/noto-sans-kr";
import { Link } from "react-router-dom";
import { ToastContainer, Toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState("");

  const storedDataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

     const {sendData} = await axios.post('/api/register', {

      ...data

    })


    console.log(sendData);


  };

  return (
    <React.Fragment>
      <Container className={styles.register}>
        <h1>JOIN US</h1>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles.div}>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="your@email.adress"
              onChange={storedDataHandler}
            />
          </div>
          <div className={styles.div}>
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={storedDataHandler}
            />
          </div>
          <button type="submit">SIGN UP</button>
          <span>
            이미 MiniLog와 함께라면{" "}
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </span>
        </form>
      </Container>
      <ToastContainer></ToastContainer>
    </React.Fragment>
  );
}
