import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ServiceCardTypes = {
  img: string;
  header: string;
  paragraph: string;
  btn: string;
  path: string;
};

const ServiceCard = ({
  img,
  header,
  paragraph,
  btn,
  path,
}: ServiceCardTypes) => {
  return (
    <div className="service_card_block flex flex-col items-center border border-boxes sm:border-0 mb-5 sm:mb-0">
      <LazyLoadImage
        src={`${img}`}
        placeholderSrc={`${img}`}
        alt={`${header}`}
        className="w-[500px]"
        effect="blur"
      />
      <h2 className="text-boxes font-bold capitalize tracking-wider text-lg md:text-2xl">
        {header}
      </h2>
      <p className="text-boxes text-center text-sm lg:text-md max-w-[300px] font-semibold mx-3 my-[13px] capitalize">
        {paragraph}
      </p>
      <Link to={`${path}`}>
        <button className="my-[13px] py-2 px-4 text-xs md:py-3 md:px-7 text-boxes tracking-widest border-2 border-boxes hover:text-white hover:bg-boxes transition duration-300 ease-in-out uppercase font-semibold">
          {btn}
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
