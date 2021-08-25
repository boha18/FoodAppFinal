
import React from 'react';
import {
    Image, StyleSheet, Text, View
} from 'react-native';


import { COLORS, FONTS, images, SIZE } from '../constants';
import LinearGradient from 'react-native-linear-gradient';


const ButtonApp = () => {
    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
})

export default ButtonApp;