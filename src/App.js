import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import getRocketsFromApi from './redux/rocket/rocketApiAction';
import Navbar from './components/navbar/navbar.component';
import MissionsPage from './pages/missions-page/missions-page.component';
import MyProfile from './pages/my-profile/my-profile.component';
import RocketsPage from './pages/rockets-page/rockets-page.component';
import { fetchMissionsStartAsync } from './redux/mission/mission.actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsStartAsync());
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
