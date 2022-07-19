import React from "react";

const Rocket = (props) => {
  const { img, description, name, id } = props;

  return (
    <div className="rocket-card">
      <div className="rocket-card-img-holder">
        <img src={img} alt="image of a rocket"/>
      </div>
      
      <div className="rocket-card-content">
        <h3 className="rocket-card-title">{name}</h3>
        <p className="rocket-card-description">{description}</p>
        <button type="button" id={id}>Reserve Rocket</button>
      </div>
    </div>
  );
}

export default Rocket;