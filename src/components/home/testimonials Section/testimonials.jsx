import "./testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../../global/loader/loader";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  // Fetching Testimonials Data
  const fetchingStatus = useSelector((state) => state.jsonDB);
  const testimonialsData = useSelector(
    (state) => state.jsonDB.hotelData.testimonials
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
    <>
      <h1 className="text-center font-header font-bold text-boxes text-2xl sm:text-3xl md:text-4xl mx-2">
        What our guests are saying
      </h1>
      <div className="testimonials_container mt-[30px] max-w-[300px] sm:max-w-[500px] mx-auto">
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
          className="testimonials_slider h-[350px] rounded-lg"
        >
          <>
            {testimonialsData?.map((slide, indx) => {
              return (
                <SwiperSlide key={indx}>
                  <div className="testimonials_cardBlock flex flex-col bg-boxes text-white p-7 h-full">
                    <span className="text-5xl">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </span>
                    <p className="text-md sm:text-2xl font-header font-bold my-7 text-center">
                      {slide.quote}
                    </p>
                    <hr />
                    <div className="guest_info flex items-center my-7">
                      <LazyLoadImage
                        src={`${slide.img}`}
                        placeholderSrc={`${slide.img}`}
                        alt="not-found"
                        className="border border-white mr-5"
                        effect="blur"
                      />
                      <div className="flex flex-col tracking-wide">
                        <p className="font-paragraph font-bold">
                          {slide.customer}
                        </p>
                        <p className="font-paragraph capitalize">customer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
