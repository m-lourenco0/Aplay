import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Slider from '@react-native-community/slider';
import { NeoMorph } from '../NewMorph'
const gray = "#91A1BD"

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}

function timePct(time, duration) {
    return time / duration;
}


function MusicInformation({ progress, musicLenght }) {

    var currentTime = formatTime(progress);
    var finalTime = formatTime(musicLenght);


    return (
        <>
            <View style={styles.songArtContainer}>
                <NeoMorph size={300}>
                    <Image source={require('../../assets/images/flume1.png')} style={styles.songArt} />
                </NeoMorph>
            </View>
                        

            <View style={styles.songContainer}>
                <Text style={styles.songTitle}>Insane</Text>
                <Text style={styles.songArtist}>Flume</Text>
            </View>

            <View style={styles.trackContainer}>
                <Slider 
                    minimumValue={0} 
                    maximunValue={1} 
                    minimumTrackTintColor="#8AAAFF" 
                    maximumTrackImage='#DAE6F4'
                    thumbTintColor="#7B9BFF"
                    value={timePct(progress, musicLenght)}
                    style={styles.slider}
                />

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={styles.time}>{currentTime}</Text>
                    <Text style={styles.time}>{finalTime}</Text>
                </View>
            </View>
        </>           
    )
}

const styles = StyleSheet.create({
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
    songContainer: {
        alignItems: 'center',
    },
    songTitle: {
        fontSize: 30,
        color: '#6C7A93',
        fontWeight: "600",
    },
    songArtist: {
        fontSize: 14,
        marginTop: 6,
        color: gray,
        fontWeight: "500",
    },
    trackContainer: {
        marginTop: 32,
        marginBottom: 64,
    },
    time: {
        fontSize: 10,
        color: gray,
        fontWeight: "700",
    },
    slider: {
        width: '100%',
    }
})

export default MusicInformation