import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import LogoText from '../Component/LogoText';
import { images, SIZE } from '../constants';

const LoginScreen = () => {
    return (
        <View >
            <Image
                source={images.Background}
                style={styles.imageStyle} >
            </Image >
            <View style={styles.container}>
                <LogoText />
                <Text style={styles.title}> Login to Your Account </Text>

            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute'
    },
    imageStyle: {
        width: SIZE.width,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
