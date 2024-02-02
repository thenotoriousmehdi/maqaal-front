import React from 'react'
import HeroSection from '../components/heroSection'
import ArtclsTendance from '../components/artclsTendance'
import Apropos from '../components/apropos'
import MembersSlider from '../components/membersSlider'
import QstFrequentes from '../components/qstFrequentes'
import Headroom from "react-headroom/src";
import Navbar from "../components/navbar";
export const Home = () =>  {
  return (
    <div>
<Headroom>
  <Navbar />{" "}
</Headroom>
    <HeroSection />
    <ArtclsTendance/> 
    <Apropos/> 
     <MembersSlider/> 
    < QstFrequentes /> 
    </div>
  )
}
