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
    // Wrapper.client?.on("connect", () => router.push("/interact"));
    Wrapper.client?.on("message", async (topic, message, packet) => {
      if (topic.endsWith("timeout")) {
        navigate("/");
        await Wrapper.pre_disconnect();
        Wrapper.client?.end(true);
      }
    });
  }, [mqttData]);

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
            try {
              Wrapper.send("Start", "");
            } catch (err) {
              console.log(err);
            }

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
