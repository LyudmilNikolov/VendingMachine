import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import VendingMachine from './VendingMachine';
import useVendingMachine from './useVendingMachine';

jest.mock('./useVendingMachine');
useVendingMachine.mockReturnValue({
    inventory: [],
    insertedCoins: 0,
    coinInput: '',
    handleCoinInputChange: jest.fn(),
    handleCoinInsertion: jest.fn(),
    buyProduct: jest.fn(),
    resetProcess: jest.fn(),
});

describe('<VendingMachine />', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<VendingMachine />);

    expect(getByPlaceholderText('Enter coin value')).toBeTruthy();
  });

  it('calls handleCoinInsertion when Insert Coin button is pressed', () => {
    const { getByText } = render(<VendingMachine />);
    const insertCoinButton = getByText('Insert Coin');

    fireEvent.press(insertCoinButton);

    expect(useVendingMachine().handleCoinInsertion).toHaveBeenCalled();
  });

});