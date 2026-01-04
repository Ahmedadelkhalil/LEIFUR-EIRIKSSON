import "./infoSection.css";
import { Link } from "react-router-dom";

type SecInfo = {
  bgImg: string;
  mainTitle: string;
  subTitle: string;
  paragraph: string;
  btn: string;
  path: string;
};

const InfoSection = ({
  bgImg,
  mainTitle,
  subTitle,
  paragraph,
  btn,
  path,
}: SecInfo) => {
  return (
    <div
      className="informativeSection_container h-[500px] relative text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container mx-auto h-[100%]">
        <div className="flex flex-col items-center justify-center mx-5 h-[100%]">
          <h1 className="text-5xl sm:text-7xl font-header mb-[30px] sm:mb-[50px]">
            {mainTitle}
          </h1>
          <h3 className="text-2xl sm:text-4xl mb-7 capitalize font-semibold">
            {subTitle}
          </h3>
          <p className="max-w-[500px] text-sm sm:text-md text-center font-semibold capitalize tracking-wide font-paragraph">
            {paragraph}
          </p>
          <Link to={path} className="mt-[40px] sm:mt-[60px]">
            <button className="border-2 border-white py-3 px-8 uppercase font-semibold tracking-widest hover:bg-boxes hover:border-boxes transition duration-300 ease-in-out rounded-md font-paragraph">
              {btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
