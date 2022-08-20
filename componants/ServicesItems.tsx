import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ServiceItemsProps {

}

const items = [
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

const ServiceItems: FC<ServiceItemsProps> = ({}) => {
  return (
    <View style={styles.main}>
      {items.map(el =>
        <View style={styles.item}>
          <Image
            style={styles.img}
            source={{
              uri: el.img,
            }}
          />
          <Text style={styles.title}>{el.title}</Text>
        </View>,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  img: {
    width: 45,
    height: 45,
  },
  title: {
    fontSize: 20
  }
});

export default ServiceItems;