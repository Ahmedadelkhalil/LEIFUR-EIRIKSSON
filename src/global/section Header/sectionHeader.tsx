import "./sectionHeader.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type PageTitle = {
  page: string;
  banner: string;
};

const SectionHeader = ({ page, banner }: PageTitle) => {
  return (
    <div
      className="sectionHeader_container h-[30vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="mb-7 uppercase font-bold font-header text-white tracking-widest text-3xl sm:text-4xl md:text-5xl">
          {page}
        </h1>
        <div className="flex justify-center items-center text-white font-bold font-paragraph">
          <Link to="/" className="mr-5">
            <button className="uppercase text-sm text-white">home</button>
          </Link>
          <span className="text-sm">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link to={`/${page}`} className="ml-4">
            <button className="uppercase text-sm text-[#FFD700]">{page}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
