import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.dummyText}>WELCOME</Text>
      </View>
      <Text style={styles.dummyText}>Let's Hunt Native !!</Text>
      <Button title='Tap me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  dummyText:{
    margin:16,
    padding: 15,
    borderWidth:2,
    borderColor:'gray',
  }
});
