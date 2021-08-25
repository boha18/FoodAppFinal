
import React from 'react';
import {
    Image, StyleSheet, Text, View
} from 'react-native';


import { COLORS, FONTS, images, SIZE } from '../constants';



const LogoText = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={images.logo}
                resizeMode='contain'
                style={styles.logoImage} />
            <Text style={styles.titleText} > Food Ninja </Text>
            <Text style={styles.subTitleText}> Deliever Favorite Food </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    subTitleText: {
        fontFamily: FONTS.Inter,
        fontSize: SIZE.fontSizeS,
        height: 13,
        lineHeight: 14,
    },
    titleText: {
        fontFamily: FONTS.Viga,
        fontSize: SIZE.fontSizeL,
        includeFontPadding: false,
        lineHeight: 46,
        height: 42,
        color: COLORS.greenColorLighter,
    },
    logoContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: SIZE.height / 5,
    }
})

export default LogoText;