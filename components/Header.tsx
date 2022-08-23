import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.photo}
               source={{ uri: 'https://www.computerhope.com/jargon/g/guest-user.jpg' }} />
        <View style={styles.greeting}>
          <Text style={styles.hello}>Hello, </Text>
          <Text style={styles.name}>Rachel</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.settings} onPress={() => {}}>
        <Image style={styles.settings}
               source={{ uri: 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png' }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  info: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  settings: {
    width: 20,
    height: 20,
  },
  photo: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  hello: {
    fontSize: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
