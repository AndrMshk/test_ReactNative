import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Expenses } from './main/Expenses';
import { Services } from './main/Services';

interface MainProps {

}

export const Main: FC<MainProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Services />
      <Expenses />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

