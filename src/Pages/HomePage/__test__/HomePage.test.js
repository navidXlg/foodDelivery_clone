import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import { click } from '@testing-library/user-event/';
import NavabarHome from '../NavbarHome';
import { AuthContext } from '../../../Context/AuthContext';
import { AppProvider } from '../../../Context/AppProvider';
import { sales } from '../../../Context/SalesContext';
import { MemoryRouter, Router } from 'react-router';
import { createMemoryHistory } from 'history';
import HomePage from '../HomePage';

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    createPortal: (node) => node,
  }));


// jest.mock('../../Hooks/useScrollTop');
// jest.mock('../../Hooks/useAuthContext');
// jest.mock('../../Hooks/useRedirectActiveAccount');



// jest.mock('../../../Context/AuthContext', () => ({
//     AuthContext: jest.fn(),
//   }));

describe('Homepage testing Component', () => {


  test("renderning Home Page with components inside", () => {
    window.scrollTo = jest.fn();
    render( <AppProvider>
              <MemoryRouter>
                 <HomePage/>
              </MemoryRouter>
            </AppProvider>);
  
      // Add assertions based on your component's content and structure
      expect(screen.getByTestId('navbar-home')).toBeInTheDocument();
      expect(screen.getByTestId('hero')).toBeInTheDocument();
      expect(screen.getByTestId('Productscatgory')).toBeInTheDocument();
      expect(screen.getByTestId('Groupingcard')).toBeInTheDocument();
      expect(screen.getByTestId('Salescenters')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    })


  // test('Renders NavbarHome component', () => {
  //       render(
  //         <AuthProvider>
  //           <MemoryRouter>
  //                   <NavabarHome/>
  //             </MemoryRouter>
  //          </AuthProvider>
  //       )
  // // Ensure the buttons and elements are rendered
  // expect(screen.getByText('ثبت نام فروشندگان')).toBeInTheDocument();
  // expect(screen.getByText('ورود یا عضویت')).toBeInTheDocument();
  // expect(screen.getByTestId('snappLogo')).toBeInTheDocument();
  // });
  

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


  // test('clicking on "ورود یا عضویت" button triggers setModel', () => {
  //   const setModel = jest.fn();
  //   render(
  //     <AuthProvider>
  //     <MemoryRouter>
  //             <NavabarHome/>
  //       </MemoryRouter>
  //    </AuthProvider>
  //   );
  
  //   fireEvent.click(screen.getByRole('button', {
  //     name : /ورود یا عضویت/i
  //   }));

  //   // Ensure that clicking the button triggers setModel
  //   expect(setModel).toHaveBeenCalled();
  // });

});
