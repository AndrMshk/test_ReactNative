import React, { FC } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, VirtualizedList } from 'react-native';

const DATA: ItemType[] = [
  {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQha0207UX14D3qH6FkrC3_eR2cl4XUUTera8KLCOyuxnJ5VdlWEg9DkxTKq-fF6UCCkPk&usqp=CAU',
    name: 'Food',
    date: 'at 0:00 pa',
    money: 189.0,
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFMsD-gRY--uUcr4MRiFmAG84Sv5agvN8ODZBgrvhYCJbFysvjoglR-GrhjeLNQrgg50&usqp=CAU',
    name: 'Car',
    date: 'at 1:00 pa',
    money: 289.0,
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopOFgDGUBsZV1McUNQZ6tZ5R6mo-1re7eFQ&usqp=CAU',
    name: 'Home',
    date: 'at 2:00 pa',
    money: 89.0,
  },
  {
    id: 4,
    img: 'https://w7.pngwing.com/pngs/957/66/png-transparent-pharmacy-computer-icons-parafarmacia-pharmacy-sign.png',
    name: 'Pharmacy',
    date: 'at 3:00 pa',
    money: 9.0,
  },
  {
    id: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQha0207UX14D3qH6FkrC3_eR2cl4XUUTera8KLCOyuxnJ5VdlWEg9DkxTKq-fF6UCCkPk&usqp=CAU',
    name: 'Drink',
    date: 'at 5:00 pa',
    money: 1289.0,
  },
  {
    id: 6,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/005/863/323/small/gun-icon-isolated-on-white-background-pistol-illustration-weapon-symbol-free-vector.jpg',
    name: 'Gun',
    date: 'at 4:00 pa',
    money: 12389.0,
  },
  {
    id: 7,
    img: 'https://w7.pngwing.com/pngs/229/132/png-transparent-globe-earth-logo-globe-miscellaneous-globe-logo.png',
    name: 'Travel',
    date: 'at 6:00 pa',
    money: 12089.0,
  },
];

type ItemType = {
  id: number
  img: string
  name: string
  date: string
  money: number
}

const Item: FC<ItemType> = ({money, date, img, name}) => (
  <View style={styles.item}>
    <View style={styles.info}>
      <Image style={styles.img} source={{ uri: img }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>{date}</Text>
      </View>
    </View>
    <Text style={styles.money}>-${money.toFixed(2)}</Text>
  </View>
);

type ExpensesItemsPropsType = {

}


export const ExpensesItems: FC<ExpensesItemsPropsType> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item: ItemType) => item.id.toString()}
        getItemCount={(data => data.length)}
        getItem={(data, index) => data[index]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  item: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  money: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

