import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreateCtx } from "../context/CreateProvider";
import Wrapper from "../mqtt_wrapper";
import styles from "../styles/Capture.module.scss";

const Capture = () => {
  const { height } = useContext(CreateCtx);
  const navigate = useNavigate();

  return (
    <div
      className={styles.wrapper}
      style={{ height: height < 690 ? "100vh" : "", transition: "all 0.5s" }}
    >
      <h1>Ready to take a short video</h1>
      <button
        onClick={() => {
          try {
            Wrapper.send("Capture", "");
          } catch (err) {
            console.log(err);
          }
          navigate("/camera");
        }}
      >
        Capture
      </button>
    </div>
  );
};

export default Capture;
