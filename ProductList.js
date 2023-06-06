import React from 'react';
import { ScrollView } from 'react-native';
import Product from './Product';

const ProductList = ({ inventory, buyProduct }) => (
  <ScrollView>
    {inventory.map((product) => (
      <Product
        key={product.id}
        product={product}
        buyProduct={buyProduct}
      />
    ))}
  </ScrollView>
);

export default ProductList;
