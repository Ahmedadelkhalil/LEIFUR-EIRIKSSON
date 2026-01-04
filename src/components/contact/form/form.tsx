import { useState } from "react";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Alert from "../../../global/alert/alert";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  // FORM VALIDATION
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name Is Required"),
    email: Yup.string().email("Invalid Email").required("Email Is Required"),
    mobile: Yup.number().required("Mobile Number Is Required"),
    msg: Yup.string().required("Message Is Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      msg: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSubmit(true);
      toast.custom(
        <Alert
          msg={`Thanks alot ${values.name} for contacting us, we will respond you within 24h`}
          status={true}
        />,
        {
          duration: 6000,
        }
      );
      values.name = "";
      values.email = "";
      values.mobile = "";
      values.msg = "";
    },
  });

  return (
    <div className="contactForm_container container mx-auto">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 my-[50px] mx-5">
          <div className="mb-10 md:mb-0">
            <h3 className="font-header text-4xl font-bold text-boxes mb-4">
              Drop A Line
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold font-paragraph text-boxes">
              SEND YOUR MESSAGE US
            </p>
          </div>
          <div>
            <p className="text-boxes font-paragraph font-semibold capitalize form-p-statement">
              Please feel free to get in touch using the form below. We would
              love to hear for you.
            </p>
          </div>
        </div>
      </div>
      <div className="form_container max-w-[1000px] mx-auto">
        <form
          action="#"
          onSubmit={formik.handleSubmit}
          className="shadow-2xl p-7 pb-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md-0 md:mb-5">
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 border border-boxes outline-none text-boxes font-semibold"
                placeholder="Your Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 font-semibold text-sm">
                  {formik.errors.name}
                </div>
              )}
              <span>
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute right-4 top-4 text-boxes cursor-pointer"
                />
              </span>
            </div>
            <div className="relative mb-[20px] md:mb-0">
              <input
                type="email"
                className="w-full p-3 border border-boxes outline-none text-boxes font-semibold"
                placeholder="Email Address"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 font-semibold text-sm">
                  {formik.errors.email}
                </div>
              )}
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute right-4 top-4 text-boxes cursor-pointer"
                />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md-0 md:mb-5">
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 border border-boxes outline-none text-boxes font-semibold"
                placeholder="Mob. Num"
                {...formik.getFieldProps("mobile")}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <div className="text-red-500 font-semibold text-sm">
                  {formik.errors.mobile}
                </div>
              )}
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute right-4 top-4 text-boxes cursor-pointer"
                />
              </span>
            </div>
            <div className="relative mb-[20px] md:mb-0 font-semibold">
              <select
                name="General Enquiries"
                className="w-full p-3 border border-boxes outline-none cursor-pointer text-boxes"
              >
                <option disabled selected hidden>
                  General Enquiries
                </option>
                <option value="Economy">ECONOMY</option>
                <option value="Single">SINGLE</option>
                <option value="Double">DOUBLE / TWIN</option>
                <option value="Church">CHURCH VIEW</option>
              </select>
              <span>
                <FontAwesomeIcon
                  icon={faCircleArrowDown}
                  className="absolute right-4 top-4 text-boxes cursor-pointer"
                />
              </span>
            </div>
          </div>
          <div className="relative">
            <textarea
              rows={7}
              className="w-full p-3 border border-boxes outline-none text-boxes font-semibold"
              {...formik.getFieldProps("msg")}
              placeholder="Message..."
            />
            {formik.touched.msg && formik.errors.msg && (
              <div className="text-red-500 font-semibold text-sm">
                {formik.errors.msg}
              </div>
            )}
            <span>
              <FontAwesomeIcon
                icon={faMessage}
                className="absolute right-4 bottom-7 text-boxes"
              />
            </span>
          </div>
          <div className="flex justify-center my-5">
            <button
              type="submit"
              className="uppercase bg-boxes text-white py-3 px-7 font-semibold rounded-lg border border-boxes hover:bg-white hover:border-boxes hover:text-boxes transition duration-300 ease-in-out"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
