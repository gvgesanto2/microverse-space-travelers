import { MISSION_ACTION_TYPES } from './mission.types';

const INITIAL_STATE = {
  missions: [],
  isLoading: false,
  error: null,
};

export default function missionReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case MISSION_ACTION_TYPES.FETCH_MISSIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case MISSION_ACTION_TYPES.FETCH_MISSIONS_SUCCESS:
      return { ...state, isLoading: false, missions: payload };
    case MISSION_ACTION_TYPES.FETCH_MISSIONS_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
}
