import { Box } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "./CardItem";
import Styles from "./Carousel.module.css";
import "swiper/css";
import { ReactComponent as PrevIcon } from "../assets/prev.svg";
import { ReactComponent as NextIcon } from "../assets/next.svg";
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

function Carousel(data) {
  const swiperRef = useRef();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  console.log(data);

  const handleSwiperChange = (swiper) => {
    // Update button visibility based on the active index
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Box className={Styles.swiperContainer}>
      {!isBeginning && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={Styles.buttonPrev}
        >
          <PrevIcon />
        </button>
      )}

      <Swiper
        modules={Navigation}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={"40"}
        allowTouchMove
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSwiperChange}
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
      {!isEnd && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={Styles.buttonNext}
        >
          <NextIcon />
        </button>
      )}
    </Box>
  );
}

export default Carousel;
