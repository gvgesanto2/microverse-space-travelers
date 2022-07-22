import { useSelector } from 'react-redux';

import { selectReservedMissions } from '../../redux/mission/mission.selectors';

import './reserved-missions.styles.scss';

export default function ReservedMissions() {
  const missionsReserved = useSelector(selectReservedMissions);

  return (
    <div className="missions-reserved">
      <h2 className="missions-reserved__title">My Missions</h2>
      {
        missionsReserved.length === 0 ? <p>You have not joined any missions</p> : (
          <ul className="missions-reserved__list">
            {missionsReserved.map(({ id, name }) => (
              <li key={id} className="missions-reserved__item">
                {name}
              </li>
            ))}
          </ul>
        )
      }

    </div>
  );
}
