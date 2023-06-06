import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getProducts } from './api';

const useVendingMachine = () => {
    const [inventory, setInventory] = useState([]);
    const [insertedCoins, setInsertedCoins] = useState(0);
    const [coinInput, setCoinInput] = useState('');
  
    const acceptedCoins = [1, 5, 10, 25, 50, 100, 1000];
  
    useEffect(() => {
      getProducts().then(response => {
        setInventory(response.data.products);
      }).catch(error => {
        Alert.alert('An error occurred while fetching products.');
        console.error(error);
      });
    }, []);
  
    const handleCoinInputChange = (value) => {
      setCoinInput(value);
    };
  
    const handleCoinInsertion = () => {
      const coinValue = parseInt(coinInput);
      insertCoin(coinValue);
    };
   
    const insertCoin = (coinValue) => {
      if (!acceptedCoins.includes(coinValue)) {
        Alert.alert(`Coin value of ${coinValue} is not accepted`);
        return;
      }
      setInsertedCoins(insertedCoins + coinValue);
    };
  
    const buyProduct = (productId) => {
      const product = inventory.find(item => item.id === productId);
    
      if (!product) {
        Alert.alert('Product not found');
        return;
      }
    
      if (insertedCoins < product.price) {
        Alert.alert('Not enough coins inserted');
        return;
      }
    
      if (product.quantity === 0) {
        Alert.alert('Product out of stock');
        return;
      }
    
      const newInventory = inventory.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setInventory(newInventory);
    
      const remainingCoins = insertedCoins - product.price;
      setInsertedCoins(remainingCoins);
    
      const change = insertedCoins - product.price;
      Alert.alert(`Change: ${change}`);
    };  
    
  
    const resetProcess = () => {
      // Return the coins to the user
      Alert.alert(`Returning ${insertedCoins} coins`);
      setInsertedCoins(0);
    };

  return {
    inventory,
    insertedCoins,
    handleCoinInputChange,
    handleCoinInsertion,
    insertCoin,
    buyProduct,
    resetProcess,
  };
};

export default useVendingMachine;