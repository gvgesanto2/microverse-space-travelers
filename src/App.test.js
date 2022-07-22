import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';

const renderWithProviders = (reduxStore, route) => render(
  <Provider store={reduxStore}>
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  </Provider>,
);

describe('App component', () => {
  it('should render correctly with the Rockets Page content', () => {
    const component = renderWithProviders(store, '/');
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with the Missions Page content', () => {
    const component = renderWithProviders(store, '/missions');
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with the MyProfile Page content', () => {
    const component = renderWithProviders(store, '/my-profile');
    expect(component).toMatchSnapshot();
  });
});
