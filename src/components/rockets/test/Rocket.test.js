import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import RocketsList from '../rocketsList/RocketsList.component';

const renderRocketComponent = () => {
  const container = render(
    <Provider store={store}>
      <RocketsList />
    </Provider>,
  );
  return container;
};

describe('Rocket test', () => {
  it('Renders the rocket component correctly', () => {
    expect(renderRocketComponent()).toMatchSnapshot();
  });
});
