import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../hooks/useStore'

const Count = observer(()=>{
    const {rootStore}=useStore()
    const handleIncrement=()=>{
        rootStore.CountStore.increment(5)
    }
    const handleDecrement=()=>{
        rootStore.CountStore.decrement()
    }
    const handleReset=()=>{
        rootStore.CountStore.reset()
    }
    return <View>
        <Text style={{textAlign:'center',fontSize:20}}>{rootStore.CountStore.getValue}</Text>
        <Button title='Increment' onPress={handleIncrement} />
        <View style={{marginVertical:10}} />
        <Button title='Decrment' onPress={handleDecrement} />
        <View style={{marginVertical:10}} />
        <Button title='Reset' onPress={handleReset} />
    </View>
})

export default Count

const styles = StyleSheet.create({})