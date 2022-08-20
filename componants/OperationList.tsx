import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import OperationsItems from './OperationsItems';

interface ItemProps {

}

const OperationList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Today</Text>
        <Image
          style={styles.button}
          source={{
            uri: 'https://w7.pngwing.com/pngs/66/875/png-transparent-arrow-computer-icons-right-arrow-angle-text-rectangle.png',
          }}
        />
      </View>
      <OperationsItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  main: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 25,
  },
  button: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OperationList;