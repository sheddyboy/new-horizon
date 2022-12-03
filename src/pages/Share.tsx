import React, { useState } from "react";
import styles from "../styles/Share.module.css";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <img src="/LOGO.svg" alt="logo" />
        {!toggle && <h1>Share your horizon with Nio Berlin House</h1>}
        {toggle && <h1>Shared! Check out the Gallery Screen</h1>}
        {!toggle && (
          <button
            onClick={() => {
              setToggle(true);
            }}
          >
            Share
          </button>
        )}
      </div>
      <div className={styles.bottom}>
        <button
          onClick={() => {
            navigate("/email");
          }}
        >
          Send to Email
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          End
        </button>
      </div>
    </div>
  );
};

export default Share;
