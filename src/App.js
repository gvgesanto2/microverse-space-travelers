import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';

import MissionsPage from './pages/missions-page/missions-page.component';
import MyProfile from './pages/my-profile/my-profile.component';
import RocketsPage from './pages/rockets-page/rockets-page.component';

function App() {
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
