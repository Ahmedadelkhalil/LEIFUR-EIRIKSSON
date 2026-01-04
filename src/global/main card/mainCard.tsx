import { Link } from "react-router-dom";
import "./mainCard.css";
import { Room_Details } from "../../types/dataTypes";

type CardInfoTypes = {
  imgDirection: string;
  img: string;
  cardHeader: string;
  cardParagraph: string;
  btn?: string;
  path?: string;
  roomsSec?: boolean;
  statePass?: Room_Details;
};

const MainCard = ({
  imgDirection,
  img,
  cardHeader,
  cardParagraph,
  btn,
  path,
  roomsSec,
  statePass,
}: CardInfoTypes) => {
  return imgDirection === "Left" ? (
    <div
      className={`mainCard_container rounded-xl p-4  ${
        roomsSec ? "shadow-xl border-2 border-boxes" : "bg-boxes"
      } flex flex-col md:flex-row items-center mx-5`}
    >
      <div className="card-img-section">
        <img
          src={`${img}`}
          alt="img-not-found"
          className={`rounded-xl ${roomsSec ? "border-2 border-boxes" : ""}`}
        />
      </div>
      <div
        className={`card-txt-section mx-5 my-4 md:my-0  ${
          roomsSec ? "text-boxes" : "text-white"
        }`}
      >
        <h3 className="text-xl font-bold tracking-wider leading-9 capitalize lg:text-[25px] font-header">
          {cardHeader}
        </h3>
        <p className="my-[20px] font-semibold md:text-[13px] lg:text-[16px] font-paragraph">
          {cardParagraph}
        </p>
        {btn ? (
          <Link to={`${path}`} state={{ from: { statePass } }}>
            <button
              className={`border-2  ${
                roomsSec
                  ? "border-boxes hover:text-white hover:bg-boxes hover:border-boxes"
                  : "border-white hover:text-boxes hover:bg-white hover:border-boxes"
              } p-3 rounded-md font-semibold tracking-wide uppercase transition duration-300 ease-in-out font-header`}
            >
              {btn}
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <div
      className={`mainCard_container rounded-xl p-4  ${
        roomsSec ? "shadow-xl border-2 border-boxes" : "bg-boxes"
      } flex flex-col-reverse md:flex-row items-center mx-5`}
    >
      <div
        className={`card-txt-section mx-5 my-4 md:my-0  ${
          roomsSec ? "text-boxes" : "text-white"
        }`}
      >
        <h3 className="text-xl font-bold tracking-wider capitalize lg:text-[25px] font-header">
          {cardHeader}
        </h3>
        <p className="my-[20px] font-semibold md:text-[13px] lg:text-[16px] font-paragraph">
          {cardParagraph}
        </p>
        {btn ? (
          <Link to={`${path}`} state={{ from: { statePass } }}>
            <button
              className={`border-2  ${
                roomsSec
                  ? "border-boxes hover:text-white hover:bg-boxes hover:border-boxes"
                  : "border-white hover:text-boxes hover:bg-white hover:border-boxes"
              } p-3 rounded-md font-semibold tracking-wide uppercase transition duration-300 ease-in-out font-header`}
            >
              {btn}
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="card-img-section">
        <img
          src={`${img}`}
          alt="img-not-found"
          className={`rounded-xl ${roomsSec ? "border-2 border-boxes" : ""}`}
        />
      </div>
    </div>
  );
};

export default MainCard;
