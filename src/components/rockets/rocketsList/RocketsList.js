import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Rocket from '../rocket/Rocket';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <section className="rocket-list-container">
      {rockets.map((rocket) => (
        <Rocket
          img={rocket.rocketImage}
          description={rocket.description}
          name={rocket.name}
          key={rocket.id}
          id={rocket.id}
          reserved={rocket.reserved}
          rocket={rocket}
        />
      ))}
    </section>
  );
};

export default RocketsList;
