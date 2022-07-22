import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import MyProfile from '../../../pages/my-profile/my-profile.component';

const renderRocketProfile = () => {
  const container = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  return container;
};

describe('My Profile page', () => {
  it('Renders my profile component correctly', () => {
    expect(renderRocketProfile()).toMatchSnapshot();
  });
});
