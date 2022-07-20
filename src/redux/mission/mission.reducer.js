import { MISSION_ACTION_TYPES } from './mission.types';
import { toggleMissionReservedById } from './mission.utils';

const INITIAL_STATE = {
  missions: [],
  isLoading: false,
  error: null,
};

export default function missionReducer(
  state = INITIAL_STATE,
  { type, payload },
) {
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
    case MISSION_ACTION_TYPES.TOGGLE_MISSION_RESERVED:
      return {
        ...state,
        missions: toggleMissionReservedById(state.missions, payload),
      };
    default:
      return state;
  }
}
