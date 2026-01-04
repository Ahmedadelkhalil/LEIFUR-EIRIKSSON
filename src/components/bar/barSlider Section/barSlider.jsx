import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../../global/loader/loader";
import { useSelector } from "react-redux";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLayoutEffect, useState } from "react";

const BarSlider = () => {
  // update Slides PerView based on width
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  // Fetching Bar Slider Imgs Data
  const fetchingStatus = useSelector((state) => state.jsonDB);
  const barSliderDataImgs = useSelector(
    (state) => state.jsonDB.hotelData.bar_slider_imgs
  );

  if (fetchingStatus.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (fetchingStatus.error) {
    return (
      <p className="text-center text-boxes font-header font-bold">
        There Is An Error Occured While Fetching Data
      </p>
    );
  }
  return (
    <div className="barSlider_container h-[300px] sm:h-[350px] md:h-[400px] mx-5">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={`${
          width <= 320 ? 1 : width > 320 ? (width < 1024 ? 2 : 3) : ""
        }`}
        loop={true}
        cssMode={true}
        className="h-full max-w-[550px] md:max-w-[700px] lg:max-w-[1024px] mx-auto"
      >
        {barSliderDataImgs?.map((slide, indx) => {
          return (
            <SwiperSlide key={indx}>
              <img
                src={`${slide.img}`}
                alt="home page img slider not found"
                className="w-full h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BarSlider;
