import React from "react"
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/work.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Menerima segala merk dan jenis mesin kopi
        </h1>
        <p className="primary-text">
          <li>Mesin Espresso</li>
          <li>Mesin Pemeras Cold Brew</li>
          <li>Mesin Pemeras French Press</li>
          <li>Dan Lain Lain</li>
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
