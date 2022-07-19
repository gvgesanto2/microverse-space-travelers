import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    img, description, name, id,
  } = props;

  return (
    <div className="rocket-card">
      <div className="rocket-card-img-holder">
        <img src={img} alt="A Super Rocket" />
      </div>

      <div className="rocket-card-content">
        <h3 className="rocket-card-title">{name}</h3>
        <p className="rocket-card-description">{description}</p>
        <button type="button" id={id}>Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
