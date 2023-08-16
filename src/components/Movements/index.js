import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
 } from 'react-native';

export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);

 return (
    <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue)}>
        <Text style={styles.date}>
            {data.date}
        </Text>
        <View style={styles.content}>
            <Text style={styles.label}>
                {data.label}
            </Text>
            {
                showValue ? 
                (
                    <Text style={data.type === 1 ? styles.value : styles.expenses}>
                        {data.type === 1 ? `R$ ${data.value}` : `- R$ ${data.value}`}
                    </Text>
                ) :
                (
                    <View style={styles.skeleton}>
                    </View>
                )
            }
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 2,
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    value: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2ecc71',
    },
    expenses: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#e74c3c',
    },
    skeleton: {
        width: 100,
        marginTop: 6,
        backgroundColor: '#DADADA',
        borderRadius: 8,
        height: 12,
    }
});