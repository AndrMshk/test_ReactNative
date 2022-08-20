import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  ListRenderItem, Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('screen');  // переменные размера экрана которые сам считает нейтив
const PADDING = 30;

type arrType = {
  id: number
  title: string
  p: number
}

const arr: arrType[] = new Array(100).fill(10).map((_, index) => ({
  id: index + 1,
  title: `title ${index + 1}`,
  p: 123123,
}));

console.log(arr);

export default function App() {

  const render: ListRenderItem<arrType> = ({ item, index }) => {
    return <View style={styles.item}>
      <Text style={{ padding: PADDING }}>
        {item.id} {item.title}
      </Text>
      {index == 4 && <Text>{item.p}</Text>}
    </View>;
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={arr}
        renderItem={render}
        numColumns={2}
        style={{}}
        contentContainerStyle={{ flexDirection: 'column' }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={() => {
          return <View><Text>Header</Text></View>;
        }}
        ListEmptyComponent={() => {
          return <View><Text>ListEmptyComponent</Text></View>;
        }}
        // keyExtractor={item => item.id}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
      <ActivityIndicator size="large"/>
      <ActivityIndicator size="small" color="#0000ff"/>
      <ActivityIndicator size="large" color="#00ff00"/>
      <StatusBar style="auto"/>
      <Button
        onPress={() => {
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {/*<Image*/}
      {/*  style={{width: 100, height: 100}}*/}
      {/*  source={{*/}
      {/*    uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<TextInput*/}
      {/*  style={styles.input}*/}
      {/*  onChangeText={() => {*/}
      {/*  }}*/}
      {/*  value={''}*/}
      {/*/>*/}
      <Pressable style={{backgroundColor: 'red'}}>
        <Text>1111111</Text>
      </Pressable>
      <Pressable style={styles.text}>
        <Text>222222</Text>
      </Pressable>
      <Pressable style={[styles.text, {backgroundColor: 'tomato', borderWidth: 1}, styles.text1]}>
        <Text>3333333</Text>
      </Pressable>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: PADDING,
    marginTop: 10,
  },
  text: {
    backgroundColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 5,
  },
  text1: {
    borderStyle: undefined,
    borderWidth: 0,
  },
  item: {
    width: ((WIDTH - PADDING * 2) / 2) - 5,
    height: ((WIDTH - PADDING * 2) / 2) - 5,
    backgroundColor: 'tomato',
    marginTop: 5,
    position: 'relative',
    // fontSize: 22,
    // color: 'white',
  },
});