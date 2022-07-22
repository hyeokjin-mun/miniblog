import React from "react";
import Typical from "react-typical";
import styles from './Home.module.css'
import "@fontsource/courgette";



const Home = (props) => {
  return (
    <section className={styles.section}>
      <article>
      <h1>MiniLog {" "}</h1>
      <div>
        <Typical
          loop={Infinity}
          wrapper="p"
          steps={[
            "Anybody",
            2000,
            "Anytime",
            2000,
            "Anywhere",
            2000,
            "Anything",
            2000,
          ]}
        />
        </div>
      </article>
    </section>

  );
};

export default Home;
