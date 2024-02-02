import React from 'react'
import Apropos from '../components/apropos'
import Headroom from "react-headroom/src";
import Navbar from "../components/navbar";
const Apropspage = () => {
  return (
    <div>
    
      <Headroom>
        <Navbar />{" "}
      </Headroom>
      <Apropos/>
    </div>
  )
}

export default Apropspage