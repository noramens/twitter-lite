import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from '../components/SideNav';

describe('Side nav Component', () => {
  function renderComponent() {
    return render(
      <Router>
        <SideNav />
      </Router>
    );
  }

  afterEach(cleanup);

  it('should render home nav item', (): void => {
    renderComponent();
    const home = screen.getByText('Home');
    expect(home).toBeInTheDocument();
  });

  it('should render profile nav item', (): void => {
    renderComponent();
    const profile = screen.getByText('Profile');
    expect(profile).toBeInTheDocument();
  });

  it('should render tweet button', (): void => {
    renderComponent();
    const tweet = screen.getByText('Tweet');
    expect(tweet).toBeInTheDocument();
  });
});
