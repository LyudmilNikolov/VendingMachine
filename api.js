const MOCK_DELAY = 1000;  // 1 second delay to simulate network latency

const PRODUCTS = [
  { id: 1, name: 'Soda', price: 100, quantity: 15 },
  { id: 2, name: 'Candy', price: 200, quantity: 10 },
  { id: 3, name: 'Chip', price: 300, quantity: 5 },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { products: PRODUCTS } });
    }, MOCK_DELAY);
  });
};
