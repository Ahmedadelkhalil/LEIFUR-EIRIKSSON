import MainSection from "../components/home/main Section/mainSection";
import Family from "../components/home/family Section/family";
import MainCard from "../global/main card/mainCard";
import InfoSection from "../components/home/informative Section/infoSection";
import Tours from "../components/home/tours Section/tours";
import Services from "../components/home/services Section/services.jsx";
import Testimonials from "../components/home/testimonials Section/testimonials.jsx";
import Slider from "../components/home/slider Section/slider.jsx";
import { useState, useEffect } from "react";
import ComponentLoader from "../global/loader/componentLoader";

const Home = () => {
  document.title = "Leifur-Eiriksson - Home";
  // Preload Images
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const srcImgs = [
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_01.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_02.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_03.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_04.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_05.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_06.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_07.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_08.jpg",
    ];
    cacheImages(srcImgs);
  }, []);
  const cacheImages = async (srcArr: string[]) => {
    const promises = await srcArr.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          resolve("img has been loaded successfuly");
        };
        img.onerror = () => {
          reject("failed while loading img");
        };
      });
    });
    await Promise.all(promises);
    return setIsLoading(false);
  };
  return isLoading ? (
    <>
      <ComponentLoader />
    </>
  ) : (
    <div className="homePage_container">
      <MainSection />
      <div className="my-[70px] md:my-[100px]">
        <Family />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <MainCard
          imgDirection="Right"
          img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_02.jpg`}
          cardHeader="Know our best deals!"
          cardParagraph="Are you travelling on a budget? See our unique and exclusive list of seasonal offers."
          btn="see rooms"
          path="/Rooms"
        />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <MainCard
          imgDirection="Left"
          img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_03.jpg`}
          cardHeader="Our rooms"
          cardParagraph="Each of our 47 rooms is unique and embraces a different layout and design. Regardless of your desired size, you can always count on our savvy perks and personalized services."
          btn="see more"
          path="/Rooms"
        />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <InfoSection
          bgImg={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_04.jpg`}
          mainTitle="The bar"
          subTitle="Just Say Skál!"
          paragraph="The hotel bar and lounge are open to guests and locals to enjoy coffee and drinks day and night. The combination of comfortable seating and chilled atmosphere invite you to savour a glass of wine or a local beer."
          btn="visit bar"
          path="/Bar"
        />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <MainCard
          imgDirection="Right"
          img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_05.jpg`}
          cardHeader="Enjoy delicious breakfast!"
          cardParagraph="A mix of fruits, vegetables, cereals, bread, cheese, cold meat, sour yogurt, milk and hot drinks."
          btn="see more"
          path="/Bar"
        />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <MainCard
          imgDirection="Left"
          img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_06.jpg`}
          cardHeader="Travelling with a group?"
          cardParagraph="Contact us directly here: manager@hotelleifur.com to get the best offers and policy details."
          btn="contact us"
          path="/Contact"
        />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <Tours />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <Services />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <InfoSection
          bgImg={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_08.jpg`}
          mainTitle="location"
          subTitle="Conveniently brilliant"
          paragraph="In harmony with Icelandic nature, the iconic architecture of Hallgrimskirkja resembles basalt columns formed by volcanic lava. Our hotel is situated at Skolavorduholt by the legendary church that serves as a vantage point, as it can be seen from every angle of the city - and has become a social media landmark."
          btn="see more"
          path="/Contact"
        />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <Testimonials />
      </div>
      <div className="my-[70px] md:my-[100px]">
        <h1 className="text-center font-header font-bold text-boxes text-2xl sm:text-3xl md:text-4xl mx-2 my-[30px]">
          gallary
        </h1>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
