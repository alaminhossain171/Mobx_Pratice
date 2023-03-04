import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Count from './components/Count';
import GetUserData from './components/GetUserData';
import { useStore } from './hooks/useStore';

export default function App() {
  const {rootStore}=useStore();
  console.log(rootStore.UserInfo)
  return (
    <View style={styles.container}>
      <Count />
      <GetUserData />
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
