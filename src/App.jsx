import RoutesPage from "./routes/routesPage";
import GoUpBtn from "./global/up Btn/goUpBtn";
import AutoGoUpOnPathChange from "./global/autoGoUpOnPathChange";
import { Toaster } from "react-hot-toast";
import { HashRouter } from "react-router-dom";

// FETCHING API DATA WITH REDUX
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingHotelData } from "./Redux/slices/jsonDB";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingHotelData());
  }, [dispatch]);
  return (
    <>
      <HashRouter>
        <RoutesPage />
        <Toaster />
        <GoUpBtn />
        <AutoGoUpOnPathChange />
      </HashRouter>
    </>
  );
};

export default App;
