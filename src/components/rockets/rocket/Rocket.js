import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Rocket = (props) => {
  const {
    img, description, name, id, reserve, rocket,
  } = props;

  console.log(rocket);

  const dispatch = useDispatch();

  const handleReserve = () => {
    console.log('Testing');
  };

  return (
    <div className="rocket-card">
      <div className="rocket-card-img-holder">
        <img src={img} alt="A Super Rocket" />
      </div>

      <div className="rocket-card-content">
        <h3 className="rocket-card-title">{name}</h3>
        <p className="rocket-card-description">{description}</p>
        {reserve ? (
          <button type="button" id={id} onClick={handleReserve}>Cancel Reservation</button>
        ) : (
          <button type="button" id={id} onClick={handleReserve}>Reserve Rocket</button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserve: PropTypes.bool.isRequired,
};

export default Rocket;
