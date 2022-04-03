import React from 'react';
import { useState } from 'react';
import MusicInformation from '../../components/MusicInformation';
import MusicControls from '../../components/MusicControls';
import BaseContainer from '../../components/BaseContainer';
import Header from '../../components/Header';

export default function Player({ navigation }) {
    const [isPlaying, setPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const musicLenght = 245;

    return (
        <BaseContainer>
            <Header navigation={navigation} title={'NOW PLAYING'} menuButton={true} navigatePage={'Config'}/>

            <MusicInformation 
                progress={progress} 
                musicLenght={musicLenght}  
            />

            <MusicControls 
                onPress={() => {setPlaying(!isPlaying); console.log("isPlaying: ", isPlaying)}}
                previousSong={() => {setProgress(0); setPlaying(false)}}
                nextSong={() => {setProgress(0); setPlaying(false)}} 
                isPlaying={isPlaying}
            />
        </BaseContainer>
    );
}
