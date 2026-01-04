import "./roomDetailsMainSec.css";

type RoomDetailsMainSection = {
  secBg: string;
  mainHeader: string;
  mainParagraph: string;
};

const RoomDetailsMainSec = ({
  secBg,
  mainHeader,
  mainParagraph,
}: RoomDetailsMainSection) => {
  return (
    <div
      className="roomDetailsMainSec_container h-[80vh] relative"
      style={{
        backgroundImage: `url("${secBg}")`,
      }}
    >
      <div className="container mx-auto text-white flex flex-col justify-center h-full">
        <h1 className="font-header font-bold text-[30px] sm:text-5xl mb-5 tracking-wider mx-5">
          {mainHeader}
        </h1>
        <p className="text-[15px] sm:text-[16px] md:text-[17px] font-paragraph max-w-[600px] mx-5">
          {mainParagraph}
        </p>
      </div>
    </div>
  );
};

export default RoomDetailsMainSec;
