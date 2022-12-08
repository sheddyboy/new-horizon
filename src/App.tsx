import React, { useContext, useEffect } from "react";
import styles from "./styles/App.module.scss";
import { useNavigate } from "react-router-dom";
import Wrapper from "./mqtt_wrapper";
import { CreateCtx } from "./context/CreateProvider";

function App() {
  let height = window.innerHeight;

  const { mqttData } = useContext(CreateCtx);
  const navigate = useNavigate();
  useEffect(() => {
    Wrapper.connect(
      mqttData.mqttServer,
      mqttData.sessionId,
      mqttData.user,
      mqttData.password
    );
    Wrapper.client?.on("connect", () => navigate("/"));
    Wrapper.client?.on("close", () => navigate("/error"));
    Wrapper.client?.on("message", async (topic, message, packet) => {
      if (topic.endsWith("timeout")) {
        navigate("/");
        await Wrapper.pre_disconnect();
        Wrapper.client?.end(true);
      }
    });
  }, [mqttData]);

  return (
    <div
      className={styles.wrapper}
      style={{ height: height < 670 ? "100vh" : "" }}
    >
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
