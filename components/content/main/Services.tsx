import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './Title';
import { ServicesItems } from './servises/ServicesItems';

interface ServicesProps {

}

export const Services: FC<ServicesProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Title title="Services" />
      <ServicesItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
});
