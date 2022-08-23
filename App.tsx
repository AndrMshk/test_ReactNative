import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {

  console.log('___');

  return (
    <LinearGradient style={styles.container} colors={['#f1e9fc', '#fbfcdc']} start={{ x: 1, y: 1 }}>
      <Header />
      <Content />
      <Footer />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
});
