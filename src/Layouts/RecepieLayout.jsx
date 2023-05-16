import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import NavigationBar from '../pages/shared/NavigatiomBat/NavigationBar';

const RecepieLayout = () => {
    return (
        <div className='bg-slate-50'>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecepieLayout;