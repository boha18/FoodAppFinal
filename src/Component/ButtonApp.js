
import React from 'react';
import {
    Image, StyleSheet, Text, View
} from 'react-native';


import { COLORS, FONTS, images, SIZE } from '../constants';
import LinearGradient from 'react-native-linear-gradient';


const ButtonApp = ({ text, width }) => {
    return (
        <LinearGradient colors={[COLORS.greenColorLighter, COLORS.greenColorDarker]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.linearGradient, { width: width }]} >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </LinearGradient >
    )
};

const styles = StyleSheet.create({
    linearGradient: {
        height: 57,
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.white,
    },
})

export default ButtonApp;