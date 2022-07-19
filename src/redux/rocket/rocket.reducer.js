// Const for the Actions
const GET_ROCKET = 'spaceTravelers/rockets/GET_ROCKET';
const RESERVE_ROCKET = 'spaceTravelers/rockets/RESERVE_ROCKET';

// Create function to add rocket
const getRocket = (rocket) => ({
  type: GET_ROCKET,
  id: rocket.key,
  name: rocket.rocket_name,
  description: rocket.description,
  image: rocket.flickr_images[0],
});

const reserveRocket = (rocket) => ({
  type: RESERVE_ROCKET,
  id: rocket.key,
});

// Reducer for the Rocket
const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_ROCKET:
      return [
        ...state,
        {
          action,
        },
      ];

    case RESERVE_ROCKET:
      return state.map(id => {
        if(action.id !== id) 
            return state;
        return { ...state, reserved: true };
    });

    default:
      return state;
  }
}

export { getRocket, reserveRocket };
export default rocketReducer;