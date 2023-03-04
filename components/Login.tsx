import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'
import { useStore } from '../hooks/useStore'
import { observer } from 'mobx-react-lite'

const Login = observer(() => {
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('')
    const { rootStore } = useStore();
  
  async  function handleSubmit() {
   await rootStore.AuthToken.postData(username,password)
    

    }


    return (
        <View>
              {/* <Text style={{textAlign:'center',fontSize:20}}>Token: {rootStore.AuthToken.getUserToken}</Text> */}
            <TextInput style={{ borderWidth: 1, color: 'black' }} placeholder='userName' onChangeText={setUserName} />
            <View style={{ marginVertical: 10 }} />
            <TextInput secureTextEntry={true} style={{ borderWidth: 1, color: 'black' }} placeholder='password' onChangeText={setPassword} />
            <View style={{ marginVertical: 10 }} />
            <Button title='submit' onPress={handleSubmit} />
        </View>
    )
})

export default Login

