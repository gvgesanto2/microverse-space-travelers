import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import getRocketsFromApi from '../../redux/rocket/rocketApiAction';
import RocketsList from '../../components/rockets/rocketsList/RocketsList';

const RocketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsFromApi());
  }, []);

  return (
    <div>
      <h1>Rockets</h1>
      <RocketsList />
    </div>
  );
};

export default RocketsPage;
