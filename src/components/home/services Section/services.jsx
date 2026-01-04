import ServiceCard from "./service Card/serviceCard";
import Loader from "../../../global/loader/loader";
import { useSelector } from "react-redux";

const Services = () => {
  // Fetching Services Data
  const fetchingStatus = useSelector((state) => state.jsonDB);
  const servicesData = useSelector(
    (state) => state.jsonDB.hotelData.service_Info
  );

  if (fetchingStatus.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (fetchingStatus.error) {
    return (
      <p className="text-center text-boxes font-header font-bold">
        There Is An Error Occured While Fetching Data
      </p>
    );
  }

  return (
    <div className="services_container container mx-auto">
      <h1 className="text-center text-4xl text-boxes mb-[30px] font-header font-semibold tracking-wide capitalize">
        Our services
      </h1>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center mx-5">
          {servicesData?.map((service, indx) => {
            return (
              <div key={indx}>
                <ServiceCard
                  img={`${service.img}`}
                  header={`${service.header}`}
                  paragraph={`${service.paragraph}`}
                  btn={`${service.btn}`}
                  path={`${service.path}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
