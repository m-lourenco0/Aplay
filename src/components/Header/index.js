import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { NeoMorph } from '../../components/NewMorph';

export default function Header({ navigation, title, menuButton, navigatePage }) {

    navigatePage = navigatePage || 'Home';

    return (
        <View style={styles.topContainer}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <NeoMorph size={48}>
                    <AntDesign name="arrowleft" size={24} color="#91A1BD" />
                </NeoMorph>
            </TouchableOpacity>
            
            <View>
                <Text style={styles.playing}>{title}</Text>
            </View>

            { menuButton 
            ?   <TouchableOpacity onPress={() => navigation.navigate(navigatePage)}>
                    <NeoMorph size={48}>
                        <Entypo name='menu' size={24} color={"#91A1BD"} />
                    </NeoMorph>
                </TouchableOpacity>
            :   <NeoMorph size={48} style={{backgroundColor: "#DEE9FD"}} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    playing: {
        color: "#91A1BD",
        fontWeight: "800",
    },
});