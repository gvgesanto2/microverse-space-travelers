/* eslint-disable react/jsx-fragments */
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMissionReserved } from '../../redux/mission/mission.actions';

import './mission-item.styles.scss';

export default function MissionItem({ mission }) {
  const dispatch = useDispatch();
  const {
    id, name, description, reserved,
  } = mission;

  const handleClick = () => dispatch(toggleMissionReserved(id));

  return (
    <tr className="mission-item">
      <td className="mission-item__name">{name}</td>
      <td className="mission-item__description">{description}</td>
      {reserved ? (
        <Fragment>
          <td className="mission-item__status-container">
            <span className="mission-item__status mission-item__status--active">
              active member
            </span>
          </td>
          <td className="mission-item__btn-container">
            <button
              onClick={handleClick}
              type="button"
              className="mission-item__btn mission-item__btn--active"
            >
              leave mission
            </button>
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <td className="mission-item__status-container">
            <span className="mission-item__status">not a member</span>
          </td>
          <td className="mission-item__btn-container">
            <button
              onClick={handleClick}
              type="button"
              className="mission-item__btn"
            >
              join mission
            </button>
          </td>
        </Fragment>
      )}
    </tr>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
