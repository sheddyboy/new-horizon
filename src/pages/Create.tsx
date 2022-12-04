import React, { useState } from "react";
import styles from "../styles/Create.module.scss";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [slider, setSlider] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(e.target.value));
  };
  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryWrapper}>
        <div className={styles.gallary}>
          <Slider {...settings}>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 3 (1).png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 1.png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 5 (1).png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 3 (1).png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 1.png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 5 (1).png" alt="" />
            </div>
          </Slider>
          <Slider {...settings}>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth 1.png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth 2.png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 6.png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth 1.png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth 2.png" alt="" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/Photo-booth2 6.png" alt="" />
            </div>
          </Slider>
        </div>
        <div className={styles.gallarySlider}>
          <p className={styles.neutral}>Neutral</p>
          <div className={styles.slider}>
            <input
              type="range"
              min="0"
              max="100"
              id="slider"
              value={slider}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div
              className={styles.sliderThumb}
              id="thumb"
              style={{ left: `${slider}%` }}
            ></div>
          </div>
          <p className={styles.abstract}>Abstract</p>
        </div>
      </div>
      <div className={styles.createBtn}>
        <button
          onClick={() => {
            navigate("/camera");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;
