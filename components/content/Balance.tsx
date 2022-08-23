import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BalanceProps {
  balance: number
}

const Balance: FC<BalanceProps> = ({ balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>123123</Text>
      <Text style={styles.balance}>${balance.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
  },
  balance: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Balance;
