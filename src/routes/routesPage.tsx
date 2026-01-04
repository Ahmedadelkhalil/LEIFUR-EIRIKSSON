import { useEffect } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// Import React Router Dom Components
import { Routes, Route, useLocation } from "react-router-dom";

// Lazy Loading For Performance Inhancement
import { lazy, Suspense } from "react";
import ComponentLoader from "../global/loader/componentLoader";
const Home = lazy(() => import("../pages/home"));
const Bar = lazy(() => import("../pages/bar"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const Rooms = lazy(() => import("../pages/rooms"));
const RoomCategoryDetails = lazy(() => import("../pages/roomCategoryDetails"));
const ErrorNotFound = lazy(() => import("../global/404/notFound"));

const RoutesPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <Suspense fallback={<ComponentLoader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Bar" element={<Bar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Rooms/:category" element={<RoomCategoryDetails />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default RoutesPage;
