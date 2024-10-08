import React from "react";
import "./../../../styles/Services.css";

function Services() {
  const services = [
    {
      title: "Massages Relaxants",
      description: "Détendez-vous avec nos massages apaisants pour un moment de pure relaxation.",
      imgSrc: "data:image/png;base64,...", // Image source (réduite pour l'exemple)
      altText: "massage-table"
    },
    {
      title: "Soins du Visage",
      description: "Ravivez l'éclat de votre peau avec nos soins du visage personnalisés.",
      imgSrc: "data:image/png;base64,...",
      altText: "visage-soin"
    },
    {
      title: "Thérapie aux Pierres Chaudes",
      description: "Soulagez vos tensions musculaires avec notre thérapie aux pierres chaudes.",
      imgSrc: "data:image/png;base64,...",
      altText: "hot-stones"
    },
  ];

  return (
    <section>
      <div className="grid-services" id="grid-services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <div className="services-icon-text">
              <span className="service-title">{service.title}</span>
              <img
                className="service-icon"
                src={service.imgSrc}
                alt={service.altText}
              />
            </div>
            <span className="service-sub-title">{service.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
