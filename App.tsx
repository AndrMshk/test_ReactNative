import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Balance from './componants/Balance';
import Content from './componants/Content';
import Footer from './componants/Footer';
import Header from './componants/Header';

export const { height: HEIGHT, width: WIDTH } = Dimensions.get('screen');  // переменные размера экрана которые сам считает нейтив
export const PADDING = 30;

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <Balance />
      <View style={styles.content}>
        <Content />
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: PADDING,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: '#fbfbde',
  },
  content: {
    width: WIDTH,
  },
});
/////1231231231231231