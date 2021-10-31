import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

import TourCollection from "./TourCollection/TourCollection";
import Tours from "./Tours/Tours";
import TravelArragement from "./TravelArragement/TravelArragement";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourCollection></TourCollection>
      <Tours></Tours>
      <TravelArragement></TravelArragement>
      {/*  <Footer></Footer> */}
    </div>
  );
};

export default Home;
