import React from "react";
import Logo from "../Assets/logo1.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          {/* <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span> */}
        </div>
        <div className="footer-section-columns">
          <span>Whatsapp: +6287760053038</span>
          <span>Jl. Lingga Bumi V Jl. Perum Dalung Permai Blok K1, Dalung, Kec. Kuta Utara, Kabupaten Badung, Bali 80117</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
