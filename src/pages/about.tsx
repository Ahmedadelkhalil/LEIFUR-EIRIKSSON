import GridStatement from "../components/about/grid statement Section/gridStatement";
import MainCard from "../global/main card/mainCard";
import SectionHeader from "../global/section Header/sectionHeader";
import Calender from "../global/calender/calender";
import { useState, useEffect } from "react";
import ComponentLoader from "../global/loader/componentLoader";

const About = () => {
  document.title = "Leifur-Eiriksson - About";
  // Preload Images
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const srcImgs = [
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/about_banner.jpg",
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/about_Sec_01.jpg",
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
        page="About"
        banner={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/about_banner.jpg`}
      />
      <div className="aboutUs_container">
        <div className="my-[50px] md:my-[80px]">
          <GridStatement />
        </div>
        <div className="mb-[80px]">
          <MainCard
            imgDirection="Left"
            img={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/about_Sec_01.jpg`}
            cardHeader="Many reasons to choose us:"
            cardParagraph="check out the Economy rooms for budget with an amazing view."
            btn="our rooms"
            path="/Rooms"
          />
        </div>
        <hr className="my-5 border-1 border-boxes" />
        <div>
          <h1 className="text-center text-2xl sm:text-4xl text-boxes capitalize font-header font-bold mx-2 my-[50px]">
            We look forward to your stay.
          </h1>
          <div className="flex justify-center mx-2 my-[50px]">
            <Calender />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
