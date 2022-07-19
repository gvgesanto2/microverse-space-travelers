import React from "react";

const Rocket = (props) => {
  
  return (
    <div className="rocket-card">
      <div className="rocket-card-img-holder">
        <img src="" alt="image of a rocket"/>
      </div>
      
      <div className="rocket-card-content">
        <h3 className="rocket-card-title"></h3>
        <p className="rocket-card-description"></p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default Rocket;