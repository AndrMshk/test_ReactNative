import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface TitleProps {
  title: string
}

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.button}
             source={{
               uri: 'https://w7.pngwing.com/pngs/66/875/png-transparent-arrow-computer-icons-right-arrow-angle-text-rectangle.png',
             }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 0,
    paddingHorizontal: 40,
  },
  button: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
  },
});

