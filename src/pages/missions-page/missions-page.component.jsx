import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import MissionsTable from '../../components/missions-table/missions-table.component';
import { fetchMissionsStartAsync } from '../../redux/mission/mission.actions';

export default function MissionsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsStartAsync());
  }, []);

  return (
    <MissionsTable />
  );
}
