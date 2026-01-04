import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import "./calender.css";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Calender = () => {
  const currentDate = dayjs(new Date());
  const modifiedDate = currentDate.add(3, "day");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <div className="calender_container border border-t-[5px] lg:border-t lg:border-l-[5px] border-boxes">
          <form
            action="#"
            onSubmit={(e) => e.preventDefault()}
            className="bg-white p-5"
          >
            <span className="p-3 text-boxes font-semibold capitalize">
              Select your dates
            </span>
            <div className="p-3 flex flex-col lg:flex-row mt-3 sm:min-w-[300px] md:min-w-[350px] lg:items-end">
              <div className="w-full flex flex-col mb-5 lg:mr-3 lg:mb-0">
                <DemoItem label="Check-In">
                  <DatePicker defaultValue={dayjs(new Date())} />
                </DemoItem>
              </div>
              {/* ------------------ */}
              <div className="w-full flex flex-col mb-5 lg:mr-3 lg:mb-0">
                <DemoItem label="Check-Out">
                  <DatePicker defaultValue={dayjs(modifiedDate)} />
                </DemoItem>
              </div>
              {/* ------------------ */}
              <button
                type="submit"
                className="w-full p-3 bg-boxes text-white font-semibold border-2 border-boxes uppercase lg:rounded-lg lg:text-sm hover:bg-white hover:text-boxes transition duration-300"
              >
                book now
              </button>
            </div>
          </form>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default Calender;
