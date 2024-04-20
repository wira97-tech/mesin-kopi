import React from "react"
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/d.png"
import Navbar from "./Navbar"
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Service Mesin Kopi 24 Jam</h1>
          <p className="primary-text">
            <span>Melayani Area Bali dan sekitarnya.</span>
          </p>
          <p className="primary-text">
            <span>Kami hadir 24 Jam dalam 7 Hari</span>
          </p>
          <h1 className="primary-heading">2 Bulan Garansi Service</h1>
          <p className="primary-text">
            <span>Garansi yang kami berikan adalah garansi service. dimana jikapun garansi habis anda tetap bisa untuk konsultasi gratis dengan kami.</span>
          </p>

          <button className="secondary-button">
            <a
              href="https://wa.me/6287760053038"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Hubungi Kami
            </a>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
