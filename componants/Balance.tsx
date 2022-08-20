import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BalanceProps {

}

const Balance: FC<BalanceProps> = ({}) => {
  return (
    <View style={styles.main}>
      <Text>Availiable balance</Text>
      <Text style={styles.balance}>$9,999.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginBottom: 20
  },
  balance: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Balance;