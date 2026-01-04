import "./roomDetailsCalenderSec.css";
import Calender from "../../../global/calender/calender";

const RoomDetailsCalenderSec = () => {
  return (
    <div className="roomDetailsCalender_container container mx-auto my-[70px] sm:my-[100px] flex flex-col items-center">
      <div className="mb-[30px] mx-5 text-center t-sec">
        <h1 className="font-header font-bold uppercase text-boxes text-xl sm:text-3xl mb-5">
          Ready to make a reservation?
        </h1>
        <p className="max-w-[400px] mx-auto text-sm sm:text-[15px] font-semibold text-boxes font-paragraph capitalize">
          We are looking forward to receiving you and to help you have a great
          experience on your stay.
        </p>
      </div>
      <div className="mx-5">
        <Calender />
      </div>
    </div>
  );
};

export default RoomDetailsCalenderSec;
