
import { StyleSheet, Text, View } from 'react-native';
import FlexDimensionBasics from './src/TelaLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Atividade de DDM</Text>
      <TelaLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
