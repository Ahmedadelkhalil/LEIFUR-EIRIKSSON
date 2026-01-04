import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../../global/loader/loader";
import { useSelector } from "react-redux";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  // Fetching Home Slider Imgs Data
  const fetchingStatus = useSelector((state) => state.jsonDB);
  const homeSliderDataImgs = useSelector(
    (state) => state.jsonDB.hotelData.main_Slider_Imgs
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
    <div className="slider_container h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={1}
        loop={true}
        cssMode={true}
        className="h-full max-w-[520px] md:max-w-[700px] lg:max-w-[1024px] mx-auto"
      >
        {homeSliderDataImgs?.map((slider, indx) => {
          return (
            <SwiperSlide key={indx}>
              <img
                src={`${slider.img}`}
                alt="home page img slider not found"
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
