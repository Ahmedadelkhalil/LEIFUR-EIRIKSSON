import MainCard from "../global/main card/mainCard";
import SectionHeader from "../global/section Header/sectionHeader";
import Loader from "../global/loader/loader";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ComponentLoader from "../global/loader/componentLoader";
// Types
import { Room_Details } from "../types/dataTypes";

const Rooms = () => {
  document.title = "Leifur-Eiriksson - Rooms";
  // Preload Images
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const srcImgs = [
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Economy_slider_01.jpg", // Eco
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/single_slider_03.jpg", // Sin
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/double_slider_01.jpg", // Dou
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/church_slider_02.jpg", // Chu
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/church_slider_06.jpg", // Banner
    ];
    cacheImages(srcImgs);
  }, []);
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
  // Fetching RoomDetails Data From jsonDB File
  const fetchingStatus = useSelector((state: any) => state.jsonDB);
  const roomsDetailsData = useSelector(
    (state: any) => state.jsonDB.hotelData.room_Details
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
  return isLoading ? (
    <>
      <ComponentLoader />
    </>
  ) : (
    <>
      <SectionHeader
        page="Rooms"
        banner={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/church_slider_06.jpg`}
      />
      <div className="roomsPage_container flex flex-col justify-center items-center container mx-auto my-[50px] sm:my-[80px]">
        <div className="flex flex-col items-center mx-5 mb-[30px] text-center">
          <h1 className="font-header font-bold uppercase tracking-widest text-boxes text-3xl sm:text-4xl md:text-5xl mb-7">
            Our rooms
          </h1>
          <p className="max-w-[600px] mx-auto text-boxes capitalize font-semibold font-paragraph text-sm sm:text-[15px] md:text-[16px]">
            Each of our 47 rooms is unique and embraces a different layout and
            design. Regardless of your desired size, you can always count on our
            savvy perks and personalized services, like complimentary breakfast,
            high-speed internet, bespoke itinerary and booking services - to
            name a few.
          </p>
        </div>
        {roomsDetailsData?.map((roomCategory: Room_Details, indx: number) => {
          return (
            <div key={indx} className="mt-[30px]">
              <MainCard
                imgDirection="Left"
                img={`${roomCategory.main_Section_Img}`}
                cardHeader={`${roomCategory.category}`}
                cardParagraph={`${roomCategory.main_Section_desc}`}
                btn={`details & features`}
                path={`/Rooms/${roomCategory.category}`}
                roomsSec={true}
                statePass={roomCategory}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rooms;
