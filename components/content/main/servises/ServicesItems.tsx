import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ItemsProps {

}

const servicesItems = [
  {
    title: 'Payments',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/2048px-Eo_circle_blue_number-1.svg.png',
  },
  {
    title: 'Insurance',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_blue_number-2.svg/2048px-Eo_circle_blue_number-2.svg.png',
  },
  {
    title: 'Transfers',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eo_circle_blue_white_number-3.svg/2048px-Eo_circle_blue_white_number-3.svg.png',
  },
];

export const ServicesItems: FC<ItemsProps> = ({}) => {
  return (
    <View style={styles.container}>
      {servicesItems.map((el, index) =>
        <View style={styles.item} key={index}>
          <Image style={styles.img} source={{ uri: el.img }} />
          <Text style={styles.title}>{el.title}</Text>
        </View>,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 50,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 15,
    marginTop: 10,
  },
});

