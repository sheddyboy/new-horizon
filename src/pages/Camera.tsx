import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../styles/Camera.module.scss";
import { useNavigate } from "react-router-dom";
import Wrapper from "../mqtt_wrapper";
import { CreateCtx } from "../context/CreateProvider";

const Camera = () => {
  const { height } = useContext(CreateCtx);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [cameraToggle, setCameraToggle] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToggle(true);
      setDisabled(false);
    }, 12000);

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

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  return (
    <div
      className={styles.wrapper}
      style={{ height: height < 670 ? "100vh" : "", transition: "all 0.5s" }}
    >
      {!cameraToggle && (
        <div className={styles.top}>
          {!toggle && <h1>Look at camera</h1>}
          {toggle && <h1>You’ve just created your New horizon</h1>}
        </div>
      )}
      {!cameraToggle && (
        <div className={styles.bottom}>
          <button
            className={styles.retake}
            disabled={disabled}
            onClick={() => {
              try {
                Wrapper.send("Retake", "");
              } catch (err) {
                console.log(err);
              }
              navigate("/create");
            }}
          >
            Retake
          </button>
          <button
            className={styles.next}
            disabled={disabled}
            onClick={() => {
              try {
                Wrapper.send("Next", "");
              } catch (err) {
                console.log(err);
              }
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
