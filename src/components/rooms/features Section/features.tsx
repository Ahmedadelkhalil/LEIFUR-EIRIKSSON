import "./features.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

type FeaturesTypes = {
  features: {
    feature_img: string;
    feature_name: string;
  }[];
};

const Features = ({ features }: FeaturesTypes) => {
  return (
    <div className="featuresSec_container container mx-auto my-[70px] sm:my-[100px]">
      <h1 className="font-header font-bold text-boxes text-[23px] sm:text-xl md:text-2xl mb-10 mx-5">
        services & amenities:
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-5">
        {features?.map((service, indx) => {
          return (
            <div key={indx} className="flex flex-col items-center mb-5">
              <LazyLoadImage
                src={service.feature_img}
                placeholderSrc={service.feature_img}
                alt={service.feature_name}
                className="mb-2 w-[80px] sm:w-[100px]"
                effect="blur"
              />
              <span className="font-paragraph text-sm text-boxes font-semibold capitalize">
                {service.feature_name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
