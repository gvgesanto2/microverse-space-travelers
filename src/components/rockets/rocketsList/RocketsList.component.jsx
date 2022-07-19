import React from "react";
// import { useSelector } from "react-redux/es/exports";
import Rocket from "../rocket/Rocket.component";

const RocketsList = () => {
  const rockets = [];
  return (
    <section className="rocket-list-container">
      {rockets.map((rocket) => (
        <Rocket img={rocket.flickr_images} description={rocket.description} name={rocket.rocket_name} key={rocket.key} />
      ))}
    </section>
  );
}

export default RocketsList;