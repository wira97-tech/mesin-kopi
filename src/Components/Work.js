import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Pilih jenis service",
      text: "Kami memiliki  teknisi yang berpengalaman dalam bidang perbaikan mesin kopi. dengan keahlian terampil dan profesional",
    },
    {
      image: DeliveryMeals,
      title: "Melayani service panggil",
      text: "Tak perlu lagi repot antar mesin kopi anda ke tempat service, Teknisi kami yang akan datang ke lokasi",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Tentang Kami</h1>
        <p className="primary-text">
        Berpengalaman Lebih dari 5 Tahun dalam Bidang Service Mesin Kopi di Bali
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
