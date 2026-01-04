import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

type RoomDetailsSliderImgs = {
  sliderImgs: {
    slider_img: string;
  }[];
};

const Slider = ({ sliderImgs }: RoomDetailsSliderImgs) => {
  return (
    <div className="roomDetailsSlider_container container mx-auto my-[70px] sm:my-[100px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={1}
        loop={true}
        effect="fade"
        className="h-full max-w-[520px] md:max-w-[700px] lg:max-w-[1024px] mx-auto shadow-sm"
      >
        {sliderImgs?.map((slider, indx) => {
          return (
            <SwiperSlide key={indx} className="bg-gray-100">
              <img
                src={`${slider.slider_img}`}
                alt={`img-${indx + 1} not found`}
                className="h-full mx-auto"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
