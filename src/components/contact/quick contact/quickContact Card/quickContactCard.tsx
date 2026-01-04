import { Link } from "react-router-dom";

type QuickContacts = {
  department: string;
  phone: string;
  email: string;
};

const QuickContactCard = ({ department, phone, email }: QuickContacts) => {
  return (
    <div className="quickContactCard_container mb-5">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-5 border-2 text-boxes font-bold border-boxes py-4 md:py-0 text-sm md:h-[84px] rounded-tl-2xl rounded-br-2xl">
          <div className="border-b-2 border-boxes md:border-b-0 md:border-r-2 mb-5 md:mb-0 font-header flex items-center">
            <p className="px-4 mb-3 md:mb-0 tracking-widest text-[15px]">
              {department}
            </p>
          </div>
          <div className="md:border-r-2 md:border-boxes font-header flex items-center">
            <p className="px-4 mb-3 md:mb-0">
              <Link to={`tel:${phone}`}>{phone}</Link>
            </p>
          </div>
          <div className="font-header flex items-center">
            <p className="px-4">
              <Link to={`mailto:${email}`}>{email}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickContactCard;
