import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NeoMorph } from '../../components/NewMorph';
import BaseContainer from '../../components/BaseContainer';
import { Shadow } from 'react-native-neomorph-shadows';

export default function Home({ navigation }) {

    return (
        <BaseContainer>
            <View style={styles.innerView}>
                <Text style={styles.text}>Aplay</Text>
            </View>
            
            <View style={styles.songArtContainer}>
                <NeoMorph size={300}>
                    <Image source={require('../../assets/images/flume2.jpg')} style={styles.songArt} />
                </NeoMorph>
            </View>

            <View style={styles.BottomContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                    <Shadow useArt style={styles.topShadow}>
                        <Shadow useArt style={styles.bottomShadow}>
                            <Text style={styles.btnText}>Let's que let's</Text>
                        </Shadow>
                    </Shadow> 
                </TouchableOpacity>
            </View>
        </BaseContainer>        
    );
}

const styles = StyleSheet.create({
    innerView: {
        marginHorizontal: 32,
        marginTop: 32,
    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        justifyContent: 'center',
        color: "#91A1BD",
    },
    BottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: "50%",
    },
    songArtContainer: {
        marginVertical: 32,
        alignItems: 'center',
    },
    songArt: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: '#D7E1F3',
        borderWidth: 10,
    },
    btnText:{
        fontSize: 17,
        color: "#DEE9FD",
        fontWeight: "300",
    },
    topShadow: { 
        shadowOffset: { width: -10, height: -10 }, 
        shadowOpacity: 1, 
        shadowRadius: 10, 
        shadowColor: '#FBFFFF',
        backgroundColor: '#8AAAFF', 
        width: 120,  
        height: 50, 
        borderRadius: 10,
    },
    bottomShadow: { 
        shadowOffset: { width: 10, height: 10 }, 
        shadowOpacity: 1, 
        shadowRadius: 10, 
        shadowColor: '#B7C4DD', 
        backgroundColor: '#8AAAFF', 
        width: 120,  
        height: 50, 
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});