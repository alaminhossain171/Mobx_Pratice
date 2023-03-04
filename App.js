import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import { Button, StyleSheet, Text, View } from 'react-native';
import Count from './components/Count';
import GetUserData from './components/GetUserData';
import Login from './components/Login';
import { useStore } from './hooks/useStore';
const App = observer(() => {
  const { rootStore } = useStore();

  return (
    <View style={styles.container}>
      <Login />
      {rootStore.AuthToken.getUserToken &&
        <>
          <Count />
          <GetUserData />
          
          <Button title='Logout' onPress={()=>rootStore.AuthToken.logout()} />
          </>}
    </View>
  );
})
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
