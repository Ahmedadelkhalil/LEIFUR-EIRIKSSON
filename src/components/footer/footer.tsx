"use client";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// Assets
import logo from "../../assets/logo/HOTEL_LEIFUR_LOGO.png";
import certificate_01 from "../../assets/certificates/TRIPADVISOR_2018.png";
import certificate_02 from "../../assets/certificates/travelmyth.png";
import certificate_03 from "../../assets/certificates/TRIPADVISOR.png";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div className="footer_container bg-boxes">
      <div className="part_one container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5">
        <div className="p-5 flex justify-center items-center">
          <Link to="/">
            <img src={logo} alt="Hotel Leifur Eiríksson" className="w-[100%]" />
          </Link>
        </div>
        <div className="p-5 flex justify-start sm:justify-center">
          <div>
            <h2 className="uppercase text-xl font-extrabold text-white mb-3">
              info
            </h2>
            <nav>
              <ul>
                <li className="mb-1">
                  <Link to="/About" className="text-white font-paragraph">
                    About Us
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/Rooms" className="text-white font-paragraph">
                    Our Rooms
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/Bar" className="text-white font-paragraph">
                    Leifur Bar
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/Contact" className="text-white font-paragraph">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="p-5 flex justify-start sm:justify-center">
          <div>
            <h2 className="uppercase text-xl font-extrabold text-white mb-3">
              location
            </h2>
            <p className="text-white font-paragraph">
              Skólavördustígur 45 101 Reykjavík Iceland
            </p>
          </div>
        </div>
        <div className="p-5 flex justify-start sm:justify-center">
          <div>
            <h2 className="uppercase text-xl font-extrabold text-white mb-3">
              Contact
            </h2>
            <ul>
              <li>
                <Link
                  to="mailto:info@hotelleifur.is"
                  className="text-white font-paragraph"
                >
                  info@hotelleifur.is
                </Link>
              </li>
              <li className="text-white font-paragraph">+354 562 0800</li>
            </ul>
          </div>
        </div>
        <div className="p-5 flex justify-start sm:justify-center">
          <div>
            <h2 className="uppercase text-xl font-extrabold text-white mb-3">
              Follow us
            </h2>
            <ul className="flex items-center">
              <li className="mr-5">
                <button>
                  <Link
                    to="https://www.facebook.com/leifurhotel/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-white" />
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link
                    to="https://www.instagram.com/hotelleifureiriksson/"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-white"
                    />
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="part_two container mx-auto p-10 flex items-center justify-center">
        <img
          src={certificate_01}
          alt="TRIPADVISOR_2018"
          className="mr-5 w-[100%]"
        />
        <img src={certificate_02} alt="travelmyth" className="w-[100%]" />
        <img src={certificate_03} alt="TRIPADVISOR" className="ml-5 w-[100%]" />
      </div>
      <hr />
      <div className="part_three container mx-auto p-10 flex flex-col items-center">
        <h2 className="text-3xl text-white font-bold mb-3">Subscribe</h2>
        <p className="text-white text-center mb-5 font-medium text-sm signIn-p">
          Sign up with your email address to receive news and updates.
        </p>
        <form action="#" onSubmit={(e) => e.preventDefault()} className="mb-5">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="px-5 py-3 w-full md:w-[270px] md:mr-3 border border-white"
            />
            <button
              type="submit"
              className="uppercase bg-boxes px-5 py-3 mt-3 md:mt-0 w-full  text-white font-semibold border border-white
               hover:bg-white hover:text-boxes transition duration-300 ease-in-out"
            >
              sign up
            </button>
          </div>
        </form>
        <p className="text-white text-sm font-semibold">
          We respect your privacy.
        </p>
      </div>
      <hr />
      <div className="part_four container mx-auto p-10 flex flex-wrap items-center justify-center">
        <span className="text-white font-semibold text-sm">
          © {currentDate}
        </span>
        <span className="text-white font-semibold text-sm ml-1">
          <Link
            to="https://github.com/Ahmedadelkhalil"
            target="_blank"
            className="underline"
          >
            Ahmed Adel
          </Link>{" "}
          |
        </span>
        <span className="text-white font-semibold text-sm ml-1">
          <Link to="#">Terms & Conditions</Link> |
        </span>
        <span className="text-white font-semibold text-sm ml-1">
          <Link to="#">Privacy Policy</Link> |
        </span>
        <span className="text-white font-semibold text-sm ml-1">
          Crafted at Brightsite
        </span>
      </div>
    </div>
  );
};

export default Footer;
