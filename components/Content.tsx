import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Balance from './content/Balance';
import { Main } from './content/Main';

interface HeaderProps {

}

const Content: FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Balance balance={9999} />
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default Content;
