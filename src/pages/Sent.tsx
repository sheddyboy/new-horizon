import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Sent.module.scss";

const Sent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/share");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Sent!</h1>
    </div>
  );
};

export default Sent;
