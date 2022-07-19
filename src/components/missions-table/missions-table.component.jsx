import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchMissionsStartAsync } from '../../redux/mission/mission.actions';

export default function MissionsTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsStartAsync());
  }, []);

  return (
    <div>Hi</div>
  );
}
