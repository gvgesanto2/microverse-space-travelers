import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
});

export const fetchMissions = async () => {
  const { data } = await api.get('/missions');
  return data;
};
