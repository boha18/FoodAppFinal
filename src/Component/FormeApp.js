import React from 'react'
import { StyleSheet, Image, TextInput, View } from 'react-native'
import { COLORS, constantsComponent, icons, PADDING_OFFSET } from '../constants'

const FormeApp = ({ placeholderText, iconSource, password, width }) => {
    return (
        <View style={[styles.container, width && { width: width }]}>
            <Image
                source={iconSource}
                style={styles.iconStyle} />
            <TextInput
                style={[styles.textInputStyle,
                iconSource && { marginLeft: 16 } ||
                !iconSource && { marginLeft: 28 },
                password && { marginRight: 20 } ||
                !password && { marginRight: 28 }]}
                placeholderTextColor={COLORS.placeHolderColor}
                placeholder={placeholderText}
                placeHolderColor='red' />
            {password && (<Image source={icons.show} style={styles.passwordIconStyle} />)}
        </View>
    )
}

export default FormeApp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: constantsComponent.fromHeight,
        maxWidth: constantsComponent.maxFormWidth,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: 12,
        backgroundColor: COLORS.white,
        marginTop: 12,
    },
    textInputStyle: {
        flex: 1,
        marginRight: 20,
        fontSize: 14,
    },
    iconStyle: {
        marginLeft: 20,
    },
    passwordIconStyle: {
        marginRight: 20,
    }
})
