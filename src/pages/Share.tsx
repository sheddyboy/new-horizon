import React, { useState } from "react";
import styles from "../styles/Share.module.scss";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const [toggle, setToggle] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroungImage}></div>
      <div className={styles.top}>
        <img src="/LOGO.svg" alt="logo" />
        {!toggle && <h1>Share your horizon with NIO House Berlin</h1>}
        {!toggle && (
          <div className={styles.terms}>
            <div
              className={styles.checkbox}
              onClick={() => {
                setTerms((terms) => !terms);
              }}
            >
              {terms && (
                <div className={styles.x}>
                  <div className={styles.left}></div>
                  <div className={styles.right}></div>
                </div>
              )}
            </div>
            <p>
              I understand that the artwork will be posted to the Gallery Screen
              in this NIO House for the duration of the event.
            </p>
          </div>
        )}
        {toggle && <h1>Shared! Check out the Gallery Screen</h1>}
        {!toggle && (
          <button
            disabled={!terms}
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
