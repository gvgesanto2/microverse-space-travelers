import ReservedMissions from '../../components/reserved-missions/reserved-missions.component';
import RocketProfile from '../../components/rockets/rocket-profile/RocketProfile.component';

import './my-profile.styles.scss';

export default function MyProfile() {
  return (
    <section className="my-profile">
      <ReservedMissions />
      <RocketProfile />
    </section>
  );
}
