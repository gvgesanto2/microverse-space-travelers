import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import MissionsPage from './missions-page.component';

let component;

describe('MissionPage component', () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
