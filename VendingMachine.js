import React from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import ProductList from './ProductList';
import useVendingMachine from './useVendingMachine';

const VendingMachine = () => {
    const {
        inventory,
        insertedCoins,
        coinInput,
        handleCoinInputChange,
        handleCoinInsertion,
        buyProduct,
        resetProcess,
    } = useVendingMachine();

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Enter coin value"
                    value={coinInput}
                    onChangeText={handleCoinInputChange}
                />
                <Button title="Insert Coin" onPress={handleCoinInsertion} />
                <Text>Inserted coins: {insertedCoins}</Text>
            </View>
            <ProductList
                inventory={inventory}
                buyProduct={buyProduct}
            />
            <Button title="Return Coins" onPress={resetProcess} />
        </View>
    );
};

export default VendingMachine;