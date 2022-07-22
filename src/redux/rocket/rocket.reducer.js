// Const for the Actions
const FETCH_ROCKET = 'spaceTravelers/rockets/FETCH_ROCKET';
const TOGGLE_ROCKET = 'spaceTravelers/rockets/TOGGLE_ROCKET';

// Create function to add rocket
const fetchRocket = (Rockets) => ({
  type: FETCH_ROCKET,
  payload: Rockets,
});

const toggleRocket = (id) => ({
  type: TOGGLE_ROCKET,
  payload: id,
});

// Initial State
const preloadedState = {
  rockets: [],
};

// Function to Toggle Rocket
const toggleRocketReserveId = (rockets, id) => {
  const newState = rockets.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return { ...rocket, reserved: !rocket.reserved };
  });

  return newState;
};

// Reducer for the Rocket
const rocketReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return {
        ...state,
        rockets: action.payload,
      };

    case TOGGLE_ROCKET:
      return {
        ...state,
        rockets: toggleRocketReserveId(state.rockets, action.payload),
      };

    default:
      return state;
  }
};

export { fetchRocket, toggleRocket };
export default rocketReducer;
