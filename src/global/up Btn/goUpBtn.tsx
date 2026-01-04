import { useState, useEffect } from "react";
import "./goUpBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const GoUpBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="goUpBtn_container">
      <button
        className={`text-white bg-boxes w-[40px] h-[40px] border-2 border-white flex items-center justify-center fixed bottom-5 right-5 transition duration-300 ease-in-out z-[1500] ${
          showBtn ? "showBtn" : "hideBtn"
        }`}
        onClick={() => goUp()}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default GoUpBtn;
