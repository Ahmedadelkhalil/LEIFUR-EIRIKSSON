import "./mainSection.css";
import { Link } from "react-router-dom";
import Calender from "../../../global/calender/calender";

const MainSection = () => {
  return (
    <div
      className="mainSection_container min-h-[100vh] relative"
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/main/Home_Sec_01.jpg")`,
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-white text-[25px] sm:text-[30px] md:text-[50px] font-bold mt-[80px] md:mt-[160px]">
          Location to love
        </h1>
        <Link
          to="/Rooms"
          className="mt-[40px] md:mt-[50px] font-paragraph font-semibold"
        >
          <button className="text-[10px] sm:text-[13px] md:text-[16px] border-2 tracking-wider text-white border-white py-4 px-8 hover:bg-white hover:text-boxes uppercase transition duration-300 ease-in-out">
            check our rooms
          </button>
        </Link>
        <p className="booking_statement font-paragraph font-semibold my-[40px] md:my-[50px] text-center text-[14px] sm:text-[16px] md:text-[18px] mx-5 md:mx-0 max-w-[600px] text-white capitalize tracking-wide">
          If you book through our website you will have one free drink per
          person offered by us during your stay!
        </p>
        <div className="mb-10">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
