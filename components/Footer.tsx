import { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface HeaderProps {

}

const IMAGES: string[] = [
  'https://w7.pngwing.com/pngs/98/702/png-transparent-font-awesome-computer-icons-house-icon-design-house-angle-logo-black.png',
  'https://w7.pngwing.com/pngs/328/1008/png-transparent-money-bag-computer-icons-cash-money-bag-logo-bank-cash.png',
  'https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-share-512.png',
  'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
];

const Footer: FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      {IMAGES.map((el, index) =>
        <TouchableOpacity key={index} style={styles.button} onPress={() => {}}>
          <Image key={index} style={styles.button} source={{ uri: el }} />
        </TouchableOpacity>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    width: 30,
    height: 30,
  },
});

export default Footer;
