import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import './rocketProfile.styles.scss';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reserveRockets = rockets.filter(({ reserved }) => reserved);

  return (
    <section className="rocket-profile">
      <h2>My Rockets</h2>
      {(reserveRockets.length === 0) ? (
        <p>You have not reserved any rockets</p>
      ) : (
        <ul className="rocket-profile-reserved">
          {reserveRockets.map(({ id, name }) => (
            <li key={id} className="rocket-profile-item">
              {name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RocketProfile;
