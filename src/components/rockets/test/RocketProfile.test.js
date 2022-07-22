import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import RocketProfile from '../rocket-profile/RocketProfile.component';

const renderRocketProfile = () => {
  const container = render(
    <Provider store={store}>
      <RocketProfile />
    </Provider>,
  );
  return container;
};

describe('Rocket Profile', () => {
  it('Renders the rocket profile component correctly', () => {
    expect(renderRocketProfile()).toMatchSnapshot();
  });
});
