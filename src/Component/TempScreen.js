
import React, { useState } from 'react';
import {
    Image, StyleSheet, Text, View,
} from 'react-native';


import { COLORS, FONTS, images, SIZE, PADDING_OFFSET } from '../constants';
import LinearGradient from 'react-native-linear-gradient';


const TempScreen = ({ title, subTitle, source }) => {
    return (
        < View style={styles.container} >
            <Image source={source}
                resizeMode='contain'
                style={styles.image} />

            <Text> {title} </Text>
            <Text> {subTitle}</Text>

        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: SIZE.width - PADDING_OFFSET.HORIZONTAL,
        backgroundColor: 'red',


    }
})

export default TempScreen;