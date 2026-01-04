import MainCard from "../global/main card/mainCard";
import BarSlider from "../components/bar/barSlider Section/barSlider.jsx";
import SectionHeader from "../global/section Header/sectionHeader";
import { useState, useEffect } from "react";
import ComponentLoader from "../global/loader/componentLoader";

const Bar = () => {
  document.title = "Leifur-Eiriksson - Bar";
  // Preload Images
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const srcImgs = [
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_01.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_02.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_03.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_04.jpg",
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
    <>
      <SectionHeader
        page="Bar"
        banner={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_03.jpg`}
      />
      <div className="BarPage_container container mx-auto my-[50px] sm:my-[50px] md:my-[90px]">
        <h1 className="font-header text-3xl md:text-4xl lg:text-5xl text-boxes text-center font-bold mb-[40px] sm:mb-[50px] md:mb-[70px]">
          Just say Skál!
        </h1>
        <div className="my-[30px] sm:my-[40px] md:my-[60px]">
          <MainCard
            imgDirection="Right"
            img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_02.jpg`}
            cardHeader="Just brewed happiness in a cup!"
            cardParagraph="our bar is an all-day destination and meeting space. Our multifunctional creative space is ideal for event hire and personal celebrations."
          />
        </div>
        <div className="my-[30px] sm:my-[40px] md:my-[60px]">
          <MainCard
            imgDirection="Left"
            img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_01.jpg`}
            cardHeader="Happiness is a small cozy cafe."
            cardParagraph="The hotel bar and lounge are open to guests and locals to enjoy coffee and cocktails day and night."
          />
        </div>
        <div className="my-[30px] sm:my-[40px] md:my-[60px]">
          <MainCard
            imgDirection="Right"
            img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/bar_Sec_04.jpg`}
            cardHeader="Book your event!"
            cardParagraph="Do you need a cozy place for you group meeting, or your mini conference? Our Leifur Bar is your venue. Contact us directly at manager@hotelleifur.is"
          />
        </div>
        <hr className="border border-boxes mt-[50px] mx-auto mb-0" />
        <div className="my-[40px] md:my-[50px]">
          <h1 className="font-header text-3xl md:text-4xl lg:text-5xl mb-[40px] text-boxes text-center font-bold">
            gallary
          </h1>
          <BarSlider />
        </div>
      </div>
    </>
  );
};

export default Bar;
