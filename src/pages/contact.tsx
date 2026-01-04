import Form from "../components/contact/form/form";
import QuickContact from "../components/contact/quick contact/quickContact.jsx";
import SectionHeader from "../global/section Header/sectionHeader";
import Map from "../components/contact/map/map";
import { useState, useEffect } from "react";
import ComponentLoader from "../global/loader/componentLoader";

const Contact = () => {
  document.title = "Leifur-Eiriksson - Contact";
  // Preload Images
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const srcImgs = [
      "https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/contact_banner.jpg",
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
        page="Contact"
        banner={`https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/contact_banner.jpg`}
      />
      <div className="contactPage_container">
        <div className="my-[50px] sm:my-[80px]">
          <Form />
        </div>
        <div className="my-[50px] sm:my-[80px]">
          <QuickContact />
        </div>
        <div className="my-[50px] sm:my-[80px]">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;
