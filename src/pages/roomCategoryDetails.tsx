import RoomDetailsMainSec from "../components/rooms/main Section/roomDetailsMainSec";
import Features from "../components/rooms/features Section/features";
import Slider from "../components/rooms/slider Section/slider";
import RoomDetailsCalenderSec from "../components/rooms/calender Section/calender";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Room_Details } from "../types/dataTypes";
import ComponentLoader from "../global/loader/componentLoader";

const RoomCategoryDetails = () => {
  const [categoryToView, setCategoryToView] = useState<Room_Details>();
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (state) {
      const { statePass } = state.from;
      setCategoryToView({ ...statePass });
    }
    // Preload Images
    const srcImgs = [
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Economy_slider_01.jpg", // Eco Banner
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/single_slider_03.jpg", // Sin Banner
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/double_slider_01.jpg", // Dou Banner
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/church_slider_02.jpg", // Chu Banner
    ];
    cacheImages(srcImgs);
  }, [state, categoryToView]);

  const cacheImages = async (srcArr: any) => {
    const promises = await srcArr.map((src: any) => {
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

  document.title = `Leifur-Eiriksson - ${
    categoryToView?.category === undefined ? "" : categoryToView?.category
  }`;

  return isLoading ? (
    <>
      <ComponentLoader />
    </>
  ) : (
    <div className="roomDetails_container">
      <div className="roomDetails_container">
        <RoomDetailsMainSec
          secBg={`${categoryToView?.room_Section_bg}`}
          mainHeader={`${
            categoryToView?.main_Section_Header === undefined
              ? ""
              : categoryToView?.main_Section_Header
          }`}
          mainParagraph={`${
            categoryToView?.main_Section_desc === undefined
              ? ""
              : categoryToView?.main_Section_desc
          }`}
        />
        <Features features={categoryToView?.services_And_Amenities!} />
        <Slider sliderImgs={categoryToView?.slider!} />
        <RoomDetailsCalenderSec />
      </div>
    </div>
  );
};

export default RoomCategoryDetails;
