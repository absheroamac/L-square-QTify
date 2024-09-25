import { Box, positions } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "./CardItem";
import Styles from "./Carousel.module.css";
import "swiper/css";
import { ReactComponent as PrevIcon } from "../assets/prev.svg";
import { ReactComponent as NextIcon } from "../assets/next.svg";
import Button from "./Button";
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";

function Carousel(data) {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  console.log(data);
  return (
    <Box className={Styles.swiperContainer}>
      <button ref={prevButtonRef} className={Styles.buttonPrev}>
        <PrevIcon />
      </button>

      <Swiper
        modules={Navigation}
        spaceBetween={32}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
        }}
      >
        {data.data.length > 0 &&
          data.data.map((element) => {
            return (
              <SwiperSlide key={element.id}>
                <CardItem card={element} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <button ref={nextButtonRef} className={Styles.buttonNext}>
        <NextIcon />
      </button>
    </Box>
  );
}

export default Carousel;
