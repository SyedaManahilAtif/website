import React from 'react'
import NavBar from "../app/components/NavBar";
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Home from './components/Menuitem';
import Offer from './components/Offer';
import Card from './components/Card';
import Reservation from './components/Reservation';
import Testimonals from './components/Testimonals';
import Footer from './components/Footer';



export default function App(){
  return(
  <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen text-white'>
    <NavBar/>
    <Carousel/>
    <Progressor/>
    <Banner/>
    <ProductList/>
    <Home/>
    <Offer/>
    <Card/>
    <Reservation/>
    <Testimonals/>
    <Footer/>

  </div>
  )
}