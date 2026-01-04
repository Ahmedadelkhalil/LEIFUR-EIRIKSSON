import "./notFound.css";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  document.title = "Leifur-Eiriksson - Error";
  return (
    <div className="notFound_container h-[70vh] flex flex-col justify-center items-center">
      <img
        src="https://raw.githubusercontent.com/DATA-Container-100/Compressed-Imgs/c0290fdb663ad451d112cc1a7c5d676031cd8c6d/404%20Error%20Page.svg"
        alt="An Error Occured While Loading Img!"
        className="mx-5 w-[250px] sm:w-[400px] md:w-[500px]"
      />

      <h4 className="capitalize mx-5 my-[30px] font-bold font-header text-boxes text-[11px] sm:text-lg md:text-xl lg:text-2xl">
        {` we couldn't find the page you're looking for`}
      </h4>
      <Link to="/">
        <button className="uppercase bg-boxes text-white pt-[10px] pb-2 px-10 mx-5 font-semibold font-paragraph rounded-sm text-sm flex justify-center items-center">
          home
        </button>
      </Link>
    </div>
  );
};

export default ErrorNotFound;
