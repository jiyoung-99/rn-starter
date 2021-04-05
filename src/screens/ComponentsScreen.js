import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {

    const greeting = <Text>"Hi there"</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            {greeting}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen
