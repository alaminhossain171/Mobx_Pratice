import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Header = ({handleCartPage}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My App</Text>
       <TouchableOpacity onPress={()=>{
    
    handleCartPage(true)
        }}>
   
   
       <Ionicons name="cart-outline" size={24} color="black" />
       <View style={styles.badge}>
        <Text style={styles.count}>{'0'}</Text>
      </View>
       </TouchableOpacity>
      </View>
    );
  };
  export default Header
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    badge: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      count: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
      },
  });