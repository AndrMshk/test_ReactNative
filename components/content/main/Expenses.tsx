import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './Title';
import { ExpensesItems } from './expenses/ExpensesItems';

interface ExpensesProps {

}

export const Expenses: FC<ExpensesProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Title title="Expenses" />
      <ExpensesItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    // flex: 4,
    width: '100%',
  },
});

