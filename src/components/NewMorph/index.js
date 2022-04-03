import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-neomorph-shadows';

export const NeoMorph = ({ children, size, style }) => {
    return (    
        <Shadow useArt 
            style={
                {
                    shadowOffset: { width: -6, height: -6 },
                    shadowOpacity: 1,
                    shadowRadius: 6,
                    shadowColor: '#FBFFFF',
                    borderRadius: 20,
                    backgroundColor: 'white',
                    width: size || 40, 
                    height: size || 40, 
                    borderRadius: size / 2 || 40 / 2 
                }
            }
        >
            <Shadow 
                useArt 
                style={
                    {
                        shadowOffset: { width: 6, height: 6 },
                        shadowOpacity: 1,
                        shadowRadius: 6,
                        shadowColor: '#B7C4DD',
                        borderRadius: 20,
                        backgroundColor: 'white',
                        width: size || 40, 
                        height: size || 40, 
                        borderRadius: size / 2 || 40 / 2
                    }
                }
            >
                <View style={[styles.inner, { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 }, style]}>
                    {children}
                </View>
            </Shadow>
        </Shadow>
    );
}

const styles = StyleSheet.create({
    inner: {
        backgroundColor: '#DEE9F7',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#E2ECFD',
        borderWidth: 1,
    },
    topShadow: {
        shadowOffset: { width: -6, height: -6 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#FBFFFF',
        elevation: 10,
    },
    bottomShadow: {
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4DD',
        elevation: 5,
    },
});