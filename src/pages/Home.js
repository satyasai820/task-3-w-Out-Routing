import React from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import MySwiper from "../components/MySwiper";

function Home(){
    return(
        <>
        <Carousel />
        <Cards />
        <Banner />
        <MySwiper />
        </>
    );
}
export default Home;