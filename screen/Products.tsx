import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useStore } from '../hooks/useStore';

const Products: React.FC = observer(() => {
    const { rootStore } = useStore();
    let data = rootStore.ProductsData.products;
    React.useEffect(() => {
        rootStore.ProductsData.fetchProduct()
    }, [])


    const renderProductCard = ({ item }) => {
        return (
            <TouchableOpacity style={styles.card} onPress={()=>alert(item.id)}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price} taka</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <View style={{ margin: 10 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderProductCard}
                    numColumns={5}
                />
            </View>
        </View>
    );
});

export default Products;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        margin: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
    },
});