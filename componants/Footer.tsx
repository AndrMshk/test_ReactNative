import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HEIGHT, PADDING, WIDTH } from '../App';

const IMAGES: string[] = [
  'https://w7.pngwing.com/pngs/98/702/png-transparent-font-awesome-computer-icons-house-icon-design-house-angle-logo-black.png',
  'https://w7.pngwing.com/pngs/328/1008/png-transparent-money-bag-computer-icons-cash-money-bag-logo-bank-cash.png',
  'https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-share-512.png',
  'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
];

interface FooterProps {

}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <View style={styles.main}>
      {IMAGES.map((el, index) =>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Image
            key={index}
            style={styles.button}
            source={{
              uri: el,
            }}
          />
        </TouchableOpacity>)}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    width: 40,
    height: 40,
  },

});

export default Footer;