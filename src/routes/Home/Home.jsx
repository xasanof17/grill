import React from "react";
import { Header, Navigation, Location, Cards } from "./../../components/";
import images from '../../constants/images'

const Home = () => {
  return (
    <>
      <section className="home">
        <Header />
        <Navigation />
        <Cards
          imgSrc='card1'
          title="ХОЛОДНЫЕ ЗАКУСКИ"
          productTitle="Ягненок"
          productWeight="Вес: 225 г"
          productTxt="Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком"
          productDefaultCost="620 ₽"
        />
        {/* <Cafe /> */}
        <Location />
      </section>
    </>
  );
};
export default Home;
