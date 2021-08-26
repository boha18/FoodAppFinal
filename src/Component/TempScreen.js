
import React, { useState } from 'react';
import {
    Image, StyleSheet, Text, View,
} from 'react-native';


import { COLORS, FONTS, images, SIZE, PADDING_OFFSET } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import ButtonApp from './ButtonApp';


const TempScreen = ({ title, subTitle, source }) => {
    return (
        < View style={styles.container} >
            <Image source={source}
                resizeMode='contain'
                style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.titleStyle}> {title} </Text>
                <Text style={styles.subTitleStyle}> {subTitle}</Text>
            </View>
            <ButtonApp text='Next' width={SIZE.buttonSmall} />

        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
    },
    image: {
        width: SIZE.width - PADDING_OFFSET.HORIZONTAL,
        height: SIZE.height / 1.8,
    },
    textContainer: {
        paddingHorizontal: 66,
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 28.83,
    },
    subTitleStyle: {
        fontSize: SIZE.fontSizeS,
        lineHeight: 21.66,
        textAlign: 'center',
        paddingTop: 20,
    }
})

export default TempScreen;