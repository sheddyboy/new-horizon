import React, { useState } from "react";
import styles from "../styles/Create.module.scss";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Create = () => {
  const [slider, setSlider] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryWrapper}>
        <div className={styles.gallary}>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.imageWrapperTop}>
                <img src="/Photo-booth2 3 (1).png" alt="" />
                <p>Vision</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageWrapperTop}>
                <img src="/Photo-booth2 1.png" alt="" />
                <p>Vision</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageWrapperTop}>
                <img src="/Photo-booth2 5 (1).png" alt="" />
                <p>Vision</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.imageWrapperBottom}>
                <img src="/Photo-booth 1.png" alt="" />
                <p>Action</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageWrapperBottom}>
                <img src="/Photo-booth 2.png" alt="" />
                <p>Action</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageWrapperBottom}>
                <img src="/Photo-booth2 6.png" alt="" />
                <p>Action</p>
              </div>
            </SwiperSlide>
          </Swiper>
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
