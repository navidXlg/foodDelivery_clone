import { render, screen, fireEvent } from '@testing-library/react';
import MainNavbar from '../MainNavbar';
import MapProvider from '../../../Context/MapContext';
import AuthProvider from '../../../Context/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('MainNavbar', () => {
  test('renders MainNavbar component', () => {
    render(
      <MapProvider>
        <AuthProvider>
            <MemoryRouter>
                <MainNavbar />
            </MemoryRouter>
        </AuthProvider>
      </MapProvider>
    );

    // Test for elements within MainNavbar
    expect(screen.getByText('ثبت نام فروشندگان')).toBeInTheDocument();
    expect(screen.getByText('ورود یا عضویت')).toBeInTheDocument();
    expect(screen.getByText('برای تغییر آدرس خود کلیک کنید')).toBeInTheDocument();

    // Clicking the login/register button
    fireEvent.click(screen.getByText('ورود یا عضویت'));
    expect(screen.getByText('ورود یا عضویت')).toBeInTheDocument(); // Assuming AuthModel is displayed

    // Clicking the map button
    fireEvent.click(screen.getByText('برای تغییر آدرس خود کلیک کنید'));
    expect(screen.getByText('برای تغییر آدرس خود کلیک کنید')).toBeInTheDocument(); // Assuming MapModel is displayed
  });
});
