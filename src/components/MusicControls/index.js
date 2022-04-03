import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NeoMorph } from '../NewMorph';
import { Ionicons } from 'react-native-vector-icons';

export default function MusicControls({ onPress, previousSong, nextSong, isPlaying }) {
  return (
    <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={previousSong}>
            <NeoMorph size={80}>
                <Ionicons name='play-back-sharp' size={24} color={"#91A1BD"} />
            </NeoMorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
            <NeoMorph size={80} style={{backgroundColor: "#8AAAFF", borderColor: "#8AAAFF", }}>
                {!isPlaying
                    ?   <Ionicons name='ios-play-sharp' size={24} color="#FFFFFF" />   
                    :   <Ionicons name='ios-pause-sharp' size={24} color="#FFFFFF" />
                }
            </NeoMorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={nextSong}>            
            <NeoMorph size={80}>
                <Ionicons name='play-forward-sharp' size={24} color={"#91A1BD"} />
            </NeoMorph>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});