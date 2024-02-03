import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SalesProvider from '../../../Context/SalesContext';
import { MemoryRouter } from 'react-router';
import SubmitionForm from '../SubmitionForm';




// Mock the sales context hook
// jest.mock('../../../Hooks/useSalesContext', () => ({
//   __esModule: true,
//   default: jest.fn(() => ({
//     setJobTitle: jest.fn(),
//     jobTitle: '',
//     isLoading: false,
//     setHomeTown: jest.fn(),
//     isFormComplete: false,
//     handleFormChange: jest.fn(),
//     errorMsg: null,
//     homeTown: '',
//     salesCredential: {},
//     handleSalesFormSubmit: jest.fn(),
//   })),
// }));



describe('SubmitionForm Component', () => {

  test('renders form inputs and buttons', () => {
    render(
        <MemoryRouter>
            <SalesProvider>
                <SubmitionForm />
            </SalesProvider>
        </MemoryRouter>
    );
    
    // Ensure form elements are rendered
    expect(screen.getById('نام فروشگاه')).toBeInTheDocument();
    expect(screen.getById('نام مالک فروشگاه')).toBeInTheDocument();
    expect(screen.getById('نام خانوادگی مالک فروشگاه')).toBeInTheDocument();
    expect(screen.getById('شماره تلفن همراه')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'دریافت کد تایید' })).toBeInTheDocument();
  });




//   test('handles form submission', () => {
//         render(
//         <MemoryRouter>
//             <SalesProvider>
//                 <SubmitionForm />
//             </SalesProvider>
//         </MemoryRouter>
//     );
    
//     // Simulate form submission
//     fireEvent.submit(screen.getByTestId('formSubmition'));

//     // Ensure handleSalesFormSubmit is called
//     expect(handleSalesFormSubmit).toHaveBeenCalledTimes(1);
//   });
});
