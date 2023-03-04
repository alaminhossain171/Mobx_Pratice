import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../hooks/useStore'

const GetUserData = observer(() => {
    const { rootStore } = useStore();
    const [userData, setUserData] = React.useState(rootStore.UserDetails.getUserData);
    React.useEffect(() => {
        rootStore.UserDetails.fetchData()
    }, [])
    React.useEffect(() => {
        setUserData(rootStore.UserDetails.getUserData);
    }, [rootStore.UserDetails.getUserData]);
    return <View>
        <Text>{userData?.id}</Text>
        <Text>{userData?.title}</Text>
        <Text>{userData?.body}</Text>
        <Text>{rootStore.CountStore.count}</Text>
    </View>
})

export default GetUserData

const styles = StyleSheet.create({})