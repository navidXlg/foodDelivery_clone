import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomerSubPage from '../CustmorSubPage';
import { MemoryRouter } from 'react-router';
import SalesProvider from '../../../Context/SalesContext';
import { useScrollToTop } from '../../../Hooks/useScrollTop';

// Mocking the useScrollToTop hook
jest.mock('../../../Hooks/useScrollTop', () => ({
    useScrollToTop: jest.fn() // Ensure to replace this with the correct export from your file
  }));


describe('CustomerSubPage Component', () => {
  beforeEach(() => {
    // Reset the mock to clear any previous calls
    jest.clearAllMocks();
  });

  test('renders all child components', () => {

    render(
        <SalesProvider>
                <CustomerSubPage />
        </SalesProvider>
        );

    // Check if NavbarSub component is rendered
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    // Check if SubmitionForm component is rendered
    expect(screen.getByTestId('formSubmition')).toBeInTheDocument();
    // Check if SnappFoodBenefit component is rendered
    expect(screen.getByTestId("snappFoodBenifit")).toBeInTheDocument();
  });

  test('scrolls to top on mount', () => {
    render(
        <MemoryRouter>
            <SalesProvider>
                <CustomerSubPage />
            </SalesProvider>
        </MemoryRouter>
    );
    // Ensure that the useScrollToTop hook is called once on mount
    expect(useScrollToTop).toHaveBeenCalledTimes(1);
  });
})
