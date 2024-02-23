import React from "react";
import { Link } from "react-router-dom";
import './Avenger.css';


function Avenger({ avenger }) {
  return (
    <div className="hero-container">
      <div className="card">
        <Link to={`/avengers/${avenger.id}`} className="card__link">
          <img className="card__image"
            src={avenger.file_photo}
            alt={avenger.vigilante_title}
          />
        </Link>
          <h5 className="card__vigilante_title">{avenger.vigilante_title}</h5>
          <p className="card__power_scale">{avenger.power_scale}</p>
      </div>
    </div>
  );
}

export default Avenger;
