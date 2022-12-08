import React, { useContext, useState } from "react";
import styles from "../styles/Share.module.scss";
import { useNavigate } from "react-router-dom";
import Wrapper from "../mqtt_wrapper";
import { CreateCtx } from "../context/CreateProvider";

const Share = () => {
  const { height } = useContext(CreateCtx);
  const [toggle, setToggle] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={styles.wrapper}
      style={{ height: height < 670 ? "100vh" : "", transition: "all 0.5s" }}
    >
      <div className={styles.backgroungImage}></div>
      <div className={styles.top}>
        <img src="/LOGO.svg" alt="logo" />
        {!toggle && <h1>Share your horizon with NIO House Berlin</h1>}
        {!toggle && (
          <div className={styles.terms}>
            <div
              className={styles.checkbox}
              onClick={() => {
                try {
                  Wrapper.send("Checkbox", !terms);
                } catch (err) {
                  console.log(err);
                }
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
              try {
                Wrapper.send("Share", "");
              } catch (err) {
                console.log(err);
              }
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
            try {
              Wrapper.send("Send_to_email", "");
            } catch (err) {
              console.log(err);
            }
            navigate("/email");
          }}
        >
          Send to Email
        </button>
        <button
          onClick={() => {
            try {
              Wrapper.send("End", "");
            } catch (err) {
              console.log(err);
            }
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
