import { View, StyleSheet, Text, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'PIX Cliente Lucas',
        value: '2.000,00',
        date: '17/10/2023',
        type: 1 // receita / entrada
    },
    {
        id: 2,
        label: 'Aluguel',
        value: '1.200,00',
        date: '10/10/2023',
        type: 0 // despesa / saída
    },
    {
        id: 3,
        label: 'Salário',
        value: '15.000,00',
        date: '05/10/2023',
        type: 1 // receita / entrada
    }
]

export default function Home() {
 return (
    <View style={styles.container}>
        <Header/>

        <Balance saldo="87.900,00" gastos="-490,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas Movimentações</Text>
        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginTop: 14,
        marginLeft: 14,
        marginRight: 14,
    }
});