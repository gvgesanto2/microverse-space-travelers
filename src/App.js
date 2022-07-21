import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import getRocketsFromApi from './redux/rocket/rocketApiAction';
import Navbar from './components/navbar/navbar';
import MissionsPage from './pages/missions-page/missions-page';
import MyProfile from './pages/my-profile/my-profile';
import RocketsPage from './pages/rockets-page/rockets-page';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsFromApi());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
