import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Product = ({ product, buyProduct }) => (
    <View style={styles.productBox}>
    <View style={styles.textContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productInfo}>Price: {product.price}</Text>
      <Text style={styles.productInfo}>Quantity: {product.quantity}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Buy" onPress={() => buyProduct(product.id)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  productBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  textContainer: {
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productInfo: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

Product.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }).isRequired,
    buyProduct: PropTypes.func.isRequired,
};

export default Product;
