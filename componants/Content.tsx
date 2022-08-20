import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import OperationList from './OperationList';
import Services from './Services';

interface ContentProps {

}

const Content: FC<ContentProps> = ({}) => {
  return (
    <View style={styles.main}>
      <Services />
      <OperationList />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    height: 450,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  services: {
    height: 100,
  },

});

export default Content;
