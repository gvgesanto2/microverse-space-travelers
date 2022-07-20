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

// Reducer for the Rocket
const rocketReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return {
        rockets: action.payload,
      };

    case TOGGLE_ROCKET:
      return state.map((id) => {
        if (state.id !== id) {
          return state;
        }
        return { ...state, reserve: !state.rocket.reserve };
      });

    default:
      return state;
  }
};

export { fetchRocket, toggleRocket };
export default rocketReducer;
