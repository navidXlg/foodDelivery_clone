import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import { click } from '@testing-library/user-event/';
import NavabarHome from '../NavbarHome';
import { AuthContext } from '../../../Context/AuthContext';
import AuthProvider from '../../../Context/AuthContext';
import { MemoryRouter, Router } from 'react-router';
import { createMemoryHistory } from 'history';

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    createPortal: (node) => node,
  }));



// jest.mock('../../../Context/AuthContext', () => ({
//     AuthContext: jest.fn(),
//   }));

describe('NavabarHome Component', () => {
  test('Renders NavbarHome component', () => {
        render(
          <AuthProvider>
            <MemoryRouter>
                    <NavabarHome/>
              </MemoryRouter>
           </AuthProvider>
        )
  // Ensure the buttons and elements are rendered
  expect(screen.getByText('ثبت نام فروشندگان')).toBeInTheDocument();
  expect(screen.getByText('ورود یا عضویت')).toBeInTheDocument();
  expect(screen.getByTestId('snappLogo')).toBeInTheDocument();
  });
  

  // test('clicking on "ثبت نام فروشندگان" button navigates to "/saleSubmit"', () => {

  //   const history = createMemoryHistory();
  //   render(
  //     <AuthProvider>
  //     <MemoryRouter initialEntries={['/']}>
  //             <NavabarHome/>
  //       </MemoryRouter>
  //    </AuthProvider>
  //   );
  
  //   const registerButton = screen.getByTestId('changPage');
  //   fireEvent.click(registerButton);
  
  //   // Ensure that clicking the button navigates to "/saleSubmit"
  //   expect(history.location.pathname).toBe('/saleSubmit');
  // });


  test('clicking on "ورود یا عضویت" button triggers setModel', () => {
    const setModel = jest.fn();
    render(
      <AuthProvider>
      <MemoryRouter>
              <NavabarHome/>
        </MemoryRouter>
     </AuthProvider>
    );
  
    fireEvent.click(screen.getByRole('button', {
      name : /ورود یا عضویت/i
    }));

    // Ensure that clicking the button triggers setModel
    expect(setModel).toHaveBeenCalled();
  });

});
