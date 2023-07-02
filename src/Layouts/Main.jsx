import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import Banner from '../pages/shared/Banner/Banner';
import Card from '../pages/Home/Card/Card';
import NavigationBar from '../pages/shared/NavigatiomBat/NavigationBar';
import ChefExhibition from '../pages/shared/Extra/ChefExhibition';
import Bonus from '../pages/shared/Extra/Bonus/Bonus';
import LatestRecipe from '../pages/shared/Extra/LatestRecipe/LatestRecipe';
import BestChicken from '../pages/shared/Extra/Bonus/BestChicken/BestChicken';
import NextWeek from '../pages/shared/Extra/Bonus/NextWeek/NextWeek';
import Slider from '../pages/shared/Extra/Bonus/Slider/Slider';

const Main = () => {
    return (
        <div className='bg-slate-50'>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Card></Card>
            <LatestRecipe></LatestRecipe>
            <BestChicken></BestChicken>
            <NextWeek></NextWeek>
            <Slider></Slider>
            <ChefExhibition></ChefExhibition>
            <Bonus></Bonus>
            <Footer></Footer>
        </div>
    );
};

export default Main;