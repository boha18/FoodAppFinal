
import React from 'react';
import {
    Image, StyleSheet, Text, View
} from 'react-native';
import LogoText from '../Component/LogoText';


import { COLORS, FONTS, images, SIZE } from '../constants';



const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={images.Background}
                style={styles.image} />
            <LogoText position={'absolute'} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: SIZE.width,
    },
})

export default SplashScreen;