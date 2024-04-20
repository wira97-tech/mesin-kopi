import React from "react"
import ProfilePic from "../Assets/imgft.png"
import { AiFillStar } from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Apa kata mereka</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Recommend   bgt buat nyari mesin, sama servisnya josss
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Pasek Dwipayana</h2>
      </div>
    </div>
  )
}

export default Testimonial
