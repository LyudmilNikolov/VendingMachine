import { renderHook, act } from '@testing-library/react-hooks';
import { Alert } from 'react-native';
import { getProducts } from './api';

import useVendingMachine from './useVendingMachine';

jest.mock('./api');
getProducts.mockResolvedValue({ data: { products: [] } });

jest.spyOn(Alert, 'alert');

describe('useVendingMachine', () => {
  it('initializes correctly', () => {
    const { result } = renderHook(() => useVendingMachine());

    expect(result.current.insertedCoins).toBe(0);
    expect(result.current.coinInput).toBe('');
    expect(result.current.inventory).toEqual([]);
  });

  it('inserts coin correctly if coin value is accepted', () => {
    const { result } = renderHook(() => useVendingMachine());

    act(() => {
      result.current.handleCoinInputChange('25');
      result.current.handleCoinInsertion();
    });

    expect(result.current.insertedCoins).toBe(25);
    expect(result.current.coinInput).toBe('');
  });
});
