// Const for the Actions
const FETCH_ROCKET = 'spaceTravelers/rockets/FETCH_ROCKET';
// const RESERVE_ROCKET = 'spaceTravelers/rockets/RESERVE_ROCKET';

// Create function to add rocket
const fetchRocket = (getRockets) => ({
  type: FETCH_ROCKET,
  rockets: getRockets,
});

// id: rocket.key,
// name: rocket.rocket_name,
// description: rocket.description,
// image: rocket.flickr_images[0]

// const reserveRocket = (rocket) => ({
//   type: RESERVE_ROCKET,
//   id: rocket.key,
// });

// Reducer for the Rocket
const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.rockets;

    // case RESERVE_ROCKET:
    //   return state.map(id => {
    //     if(action.id !== id) 
    //         return state;
    //     return { ...state, reserved: true };
    // });

    default:
      return state;
  }
}

export { fetchRocket };
export default rocketReducer;