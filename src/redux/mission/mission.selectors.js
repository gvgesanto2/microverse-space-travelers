import { createSelector } from 'reselect';

const selectMissionReducer = (state) => state.mission;

export const selectMissions = createSelector(
  [selectMissionReducer],
  (missionSlice) => missionSlice.missions,
);

export const selectReservedMissions = createSelector(
  [selectMissions],
  (missions) => missions.filter(({ reserved }) => reserved),
);

export const selectIsLoading = createSelector(
  [selectMissionReducer],
  (missionSlice) => missionSlice.isLoading,
);
