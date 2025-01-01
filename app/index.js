import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from '../screens/Signup';

export default function Page() {
  const names = [
    'Eniola', 
    'John', 
    'James', 
    'Peter', 
    'Philip'
  ];
  return <Signup />
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
