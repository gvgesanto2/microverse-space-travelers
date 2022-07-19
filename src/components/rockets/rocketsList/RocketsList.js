import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Rocket from '../rocket/Rocket';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <section className="rocket-list-container">
      {rockets.map((rocket) => (
        <Rocket
          img={rocket.flickr_images[0]}
          description={rocket.description}
          name={rocket.rocket_name}
          key={rocket.id}
          id={rocket.id}
        />
      ))}
    </section>
  );
};

export default RocketsList;
