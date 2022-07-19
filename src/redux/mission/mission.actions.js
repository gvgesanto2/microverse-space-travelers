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
        missionsArray.map((mission) => ({ ...mission, reserved: false })),
      ),
    );
  } catch (error) {
    dispatch(fetchMissionsFailure(error));
  }
};
