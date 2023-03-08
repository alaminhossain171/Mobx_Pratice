import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Count from './components/Count';
import GetUserData from './components/GetUserData';
import Header from './components/Header';
import Login from './components/Login';
import { useStore } from './hooks/useStore';
import CartScreen from './screen/CartScreen';
import Products from './screen/Products';
const App = observer(() => {
  const { rootStore } = useStore();
  const [cartPage,setCartpage]=useState(false);
  const handleCartPage=(para)=>{
setCartpage(para)
  }

  return (
    <View style={styles.container}>
      {cartPage && <CartScreen />}
      {!cartPage && <>
        <Header handleCartPage={handleCartPage} />
      <Products /></>}
      {/* <Login />
      {rootStore.AuthToken.getUserToken &&
        <>
        <Products />
          <Count />
          <GetUserData />
          
          <Button title='Logout' onPress={()=>rootStore.AuthToken.logout()} />
          </>
          
          } */}
    </View>
  );
})
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
