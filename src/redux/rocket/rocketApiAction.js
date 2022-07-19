import { fetchRocket } from './rocket.reducer';

// Base URL
const baseUrl = 'https://api.spacexdata.com/v3/rockets';

// API Action
const getRocketsFromApi = () => async (dispatch) => {
  const data = await fetch(baseUrl);
  const response = await data.json();

  const rockets = response;

  dispatch(fetchRocket(rockets));
};

export default getRocketsFromApi;
