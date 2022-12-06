import React, { useEffect } from "react";
import styles from "./styles/App.module.scss";
import { useNavigate } from "react-router-dom";
import Wrapper from "./mqtt_wrapper";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // Wrapper.connect("", "", "", "");

    return () => {
      // Wrapper.send("connected", 0);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroungImage}></div>
      <div className={styles.top}>
        <img src="/LOGO.svg" alt="logo" />
        <h1>Create Your Own Horizon</h1>
      </div>
      <div className={styles.bottom}>
        <button
          onClick={() => {
            navigate("/create");
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
