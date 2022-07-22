/* eslint-disable camelcase */
/* eslint-disable implicit-arrow-linebreak */
import { fetchMissions } from '../../services/api.service';
import { createAction } from '../../utils/reducer.utils';
import { MISSION_ACTION_TYPES } from './mission.types';

export const fetchMissionsStart = () =>
  createAction(MISSION_ACTION_TYPES.FETCH_MISSIONS_START);

export const fetchMissionsSuccess = (missionsArray) =>
  createAction(MISSION_ACTION_TYPES.FETCH_MISSIONS_SUCCESS, missionsArray);

export const fetchMissionsFailure = (error) =>
  createAction(MISSION_ACTION_TYPES.FETCH_MISSIONS_FAILURE, error);

export const fetchMissionsStartAsync = () => async (dispatch) => {
  dispatch(fetchMissionsStart());
  try {
    const missionsArray = await fetchMissions();
    dispatch(
      fetchMissionsSuccess(
        missionsArray.map(({ mission_id, mission_name, description }) => ({
          id: mission_id,
          name: mission_name,
          description,
          reserved: false,
        })),
      ),
    );
  } catch (error) {
    dispatch(fetchMissionsFailure(error));
  }
};

export const toggleMissionReserved = (missionId) =>
  createAction(MISSION_ACTION_TYPES.TOGGLE_MISSION_RESERVED, missionId);
