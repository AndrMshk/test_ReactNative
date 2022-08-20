import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://www.computerhope.com/jargon/g/guest-user.jpg',
          }}
        />
        <View style={styles.title}>
          <Text>Hello, </Text><Text style={styles.name}>Rachel </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.settings}
        onPress={() => {}}
      >
        <Image
          style={styles.settings}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 30,
    width: '100%'
  },
  userInfo: {
    width: 250,
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  settings: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;


