import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleRocket } from '../../../redux/rocket/rocket.reducer';

const Rocket = (props) => {
  const {
    img, description, name, id, reserved,
  } = props;

  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(toggleRocket(id));
  };

  return (
    <div className="rocket-card">
      <div className="rocket-card-img-holder">
        <img src={img} alt="A Super Rocket" />
      </div>

      <div className="rocket-card-content">
        <h3 className="rocket-card-title">{name}</h3>
        <p className="rocket-card-description">{description}</p>
        {reserved ? (
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
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
