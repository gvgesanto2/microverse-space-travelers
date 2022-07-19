import { fetchRocket } from "./rocket.reducer";

// Base URL
const baseUrl = 'https://api.spacexdata.com/v3/rockets';

// API Action
const getRocketsFromApi = () => async (dispatch) => {
  const rockets = [];
  const data = await fetch(baseUrl);
  const response = await data.json();

  Object.keys(response).map((key) => {
    const rocket = response[key][0];
    rocket.id = key;
    rocket.key = key;
    rockets.push(rocket);
    return null;
  });
  dispatch(fetchRocket(rockets));
}

export default getRocketsFromApi;