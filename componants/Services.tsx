import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ServiceItems from './ServicesItems';

interface ServicesProps {

}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <View>
      <View style={styles.main}>
        <Text style={styles.title}>Services</Text>
        <Image
          style={styles.button}
          source={{
            uri: 'https://w7.pngwing.com/pngs/66/875/png-transparent-arrow-computer-icons-right-arrow-angle-text-rectangle.png',
          }}
        />
      </View>
      <ServiceItems />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Services;