import React, { useContext } from "react";
import styles from "../styles/Create.module.scss";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Wrapper from "../mqtt_wrapper";
import { CreateCtx } from "../context/CreateProvider";

const Create = () => {
  const { action, setAction, setSlider, setVision, slider, vision } =
    useContext(CreateCtx);
  const navigate = useNavigate();

  const visionGallary = [
    { id: "1", image: "/Photo-booth2 3 (1).png" },
    { id: "2", image: "/Photo-booth2 1.png" },
    { id: "3", image: "/Photo-booth2 5 (1).png" },
  ];
  const actionGallary = [
    { id: "1", image: "/Photo-booth 1.png" },
    { id: "2", image: "/Photo-booth 2.png" },
    { id: "3", image: "/Photo-booth2 6.png" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(Number(e.target.value));
  };

  const handleCreate = () => {
    try {
      Wrapper.send("Vision", visionGallary[vision].image);
      Wrapper.send("Action", actionGallary[action].image);
      Wrapper.send("Slider", slider);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryWrapper}>
        <p className={styles.title}>Swipe to adjust your horizon</p>
        <div className={styles.gallary}>
          <Swiper
            onSwiper={(swiper) => (swiper.activeIndex = vision)}
            onSlideChange={(swiper) => {
              setVision(swiper.activeIndex);
            }}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            className="mySwiper"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p className={styles.vision}>Vision</p>
            {visionGallary.map((i) => (
              <SwiperSlide key={i.id}>
                <div className={styles.imageWrapperTop}>
                  <img src={i.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={(swiper) => (swiper.activeIndex = action)}
            onSlideChange={(swiper) => {
              setAction(swiper.activeIndex);
            }}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            className="mySwiper"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p className={styles.action}>Action</p>
            {actionGallary.map((i) => (
              <SwiperSlide key={i.id}>
                <div className={styles.imageWrapperBottom}>
                  <img src={i.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.gallarySlider}>
          <p className={styles.neutral}>Original</p>
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
            handleCreate();
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
