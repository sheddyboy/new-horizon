import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Camera.module.css";
import { useNavigate } from "react-router-dom";

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [cameraToggle, setCameraToggle] = useState(true);
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

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {},
      })
      .then((stream) => {
        let video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className={styles.wrapper}>
      {!cameraToggle && (
        <div className={styles.top}>
          {!toggle && <h1>Look at camera</h1>}
          {toggle && <h1>You’ve just created your own horizon</h1>}
        </div>
      )}
      {!cameraToggle && (
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
      )}
      {cameraToggle && (
        <div className={styles.camera}>
          <video className={styles.video} ref={videoRef}></video>
        </div>
      )}
    </div>
  );
};

export default Camera;
