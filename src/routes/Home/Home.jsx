import React from "react";
import { Header, Navigation, Location } from "./../../components/";

const Home = () => {
  return (
    <>
      <section className="home">
        <Header />
      <Navigation />
      {/* <Cafe /> */}
      <Location />
      </section>
    </>
  );
};
export default Home;
