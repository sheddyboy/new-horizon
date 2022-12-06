import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import Wrapper from "./mqtt_wrapper";

function App() {
  const [searchParams] = useSearchParams();
  const [mqttData] = useState({
    mqttServer: searchParams.get("mqtt_server"),
    sessionId: searchParams.get("session_id"),
    user: searchParams.get("user"),
    password: searchParams.get("password"),
  });
  const navigate = useNavigate();
  useEffect(() => {
    Wrapper.connect(
      mqttData.mqttServer ? mqttData.mqttServer : "",
      mqttData.sessionId ? mqttData.sessionId : "",
      mqttData.user ? mqttData.user : "",
      mqttData.password ? mqttData.password : ""
    );

    // return () => {
    //   Wrapper.send("connected", 0);
    // };
  }, [mqttData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroungImage}></div>
      <div className={styles.top}>
        <img src="/LOGO.svg" alt="logo" />
        <h1>Create Your New Horizon</h1>
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
