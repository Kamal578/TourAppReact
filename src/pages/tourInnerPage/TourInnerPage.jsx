import React from 'react'
import Header from "../../components/layout/Header";
import AboutCities from './AboutCities';
import Hero from './Hero';

function TourInnerPage() {
  return (
    <div>
        <Header currentPage={2} color="white"/>
        <Hero/>
        <AboutCities/>
    </div>
  )
}

export default TourInnerPage