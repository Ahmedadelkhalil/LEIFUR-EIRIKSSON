import "./quickContact.css";
import QuickContactCard from "./quickContact Card/quickContactCard";
import Loader from "../../../global/loader/loader";
import { useSelector } from "react-redux";

const QuickContact = () => {
  // Fetching Quick Contacts Data
  const fetchingStatus = useSelector((state) => state.jsonDB);
  const quickContactsData = useSelector(
    (state) => state.jsonDB.hotelData.quick_contacts
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
    <div className="quickContacts_container container mx-auto">
      <div className="flex flex-col items-center mb-[30px]">
        <h1 className="font-header text-3xl md:text-4xl font-bold text-boxes">
          quick contact
        </h1>
        <p className="uppercase mt-4 text-boxes font-semibold font-paragraph text-sm contact-p-statement">
          contact for all your need
        </p>
      </div>
      {quickContactsData?.map((contactSlide, indx) => {
        return (
          <div key={indx}>
            <QuickContactCard
              department={contactSlide.department}
              phone={contactSlide.phone}
              email={contactSlide.email}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QuickContact;
