/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './rocket.styles.scss';
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
        {reserved ? (
          <Fragment>
            <p className="rocket-card-description">
              <span>Reserved</span>
              {description}
            </p>
            <button
              type="button"
              id={id}
              onClick={handleReserve}
              className="main-btn cancel-btn"
            >
              Cancel Reservation
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <p className="rocket-card-description">{description}</p>
            <button
              type="button"
              id={id}
              onClick={handleReserve}
              className="main-btn"
            >
              Reserve Rocket
            </button>
          </Fragment>
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
