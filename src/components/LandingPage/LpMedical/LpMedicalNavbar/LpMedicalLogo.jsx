import React from 'react'
import "./LpMedicalNavbar.css"

import logo from "./../../../../Img/TSS.png"
import Image from 'next/image'
const LpMedicalLogo = () => {
  return (
    <div className="lpMedical-logoContainer">
      <a href="/">
        <Image src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default LpMedicalLogo
