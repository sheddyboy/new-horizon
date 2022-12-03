import React, { useEffect, useState } from "react";
import styles from "../styles/Camera.module.css";
import { useNavigate } from "react-router-dom";

const Camera = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToggle(true);
      setDisabled(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        {!toggle && <h1>Look at camera</h1>}
        {toggle && <h1>You’ve just created your own horizon</h1>}
      </div>
      <div className={styles.bottom}>
        <button
          className={styles.retake}
          disabled={disabled}
          onClick={() => {
            navigate("/create");
          }}
        >
          Retake
        </button>
        <button
          className={styles.next}
          disabled={disabled}
          onClick={() => {
            navigate("/share");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Camera;
