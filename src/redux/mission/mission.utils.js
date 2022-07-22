/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
export const toggleMissionReservedById = (missionsArray, missionId) =>
  missionsArray.map((mission) => {
    if (mission.id !== missionId) {
      return mission;
    }
    return { ...mission, reserved: !mission.reserved };
  });
