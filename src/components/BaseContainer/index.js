import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function BaseContainer({ children }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <StatusBar style="dark" backgroundColor='#DEE9FD' />
                <SafeAreaView style={styles.safeArea}>
                    {children}
                </SafeAreaView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    innerView: {
        marginHorizontal: 32,
        marginTop: 32,
    },
    container: {
        flex: 1,
        backgroundColor: '#DEE9FD',
        alignItems: 'center',
    },
    safeArea: {
        alignSelf: 'stretch',
    }
});
