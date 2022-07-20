import { useSelector } from 'react-redux';
import { selectMissions } from '../../redux/mission/mission.selectors';
import MissionItem from '../mission-item/mission-item.component';

const missionsTableHeaders = [
  {
    id: 1,
    title: 'mission',
  },
  {
    id: 2,
    title: 'description',
  },
  {
    id: 3,
    title: 'status',
  },
];

export default function MissionsTable() {
  const missions = useSelector(selectMissions);

  return (
    <table className="missions-table">
      <thead>
        <tr>
          {missionsTableHeaders.map(({ id, title }) => (
            <th key={id}>{title}</th>
          ))}
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionItem key={mission.id} mission={mission} />
        ))}
      </tbody>
    </table>
  );
}
