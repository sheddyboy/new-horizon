import React from "react";
import styles from "../styles/Error.module.scss";

const Error = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Oops! Something went wrong</h1>
      <p>Please scan the QR code again or refresh site to reconnect.</p>
    </div>
  );
};

export default Error;
