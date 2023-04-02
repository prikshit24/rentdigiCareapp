import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";


function PopUp({ handleDelete, handleHide, message, data }) {
    // alert(props.isLoading)
    const handlePress = () => {
        handleDelete(data)
    };
    // const handleHide = () => {
    //     handleHide()
    // };

    return (
        <View style={[styles.deletePopupOuter]}>
            <View style={[styles.deletePopup]}>
                <Text style={[styles.dataTitle, styles.darkGreyTxt]} >
                    {message}</Text>
                <View style={styles.butonPopup}>
                    <TouchableOpacity style={[styles.btnMain, styles.transparentBtn, styles.btnCol]} onPress={() => handlePress()}>
                        <Text style={[styles.yesBtn, styles.yesTxt, styles.font16,]}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnMain, styles.btnCol]} onPress={() => handleHide()}>
                        <Text style={[styles.yesBtn, styles.whiteText, styles.font16,]}>No</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

export default PopUp;

const styles = StyleSheet.create({
    deletePopupOuter: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 9,
        textAlign: 'center',
        justifyContent: 'center'
    },
    deletePopup: {
        backgroundColor: '#fff',
        right: 0,
        zIndex: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 8,
        shadowOpacity: 0.5,
        elevation: 12,
        borderRadius: 16,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    dataTitle: {
        textAlign: 'center',
        fontSize: 16,
        alignItems: 'center',
        paddingHorizontal: 60,
        lineHeight: 24,
        color: '#333333',

    },
    butonPopup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,

    },
    btnMain: {
        backgroundColor: '#0b4e83',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 80,
        marginRight: 10,
        marginTop: 10,
    },
    yesBtn: {
        textAlign: 'center',

    },
    yesTxt: {
        color: '#ffffff',
    },
    whiteText: {
        color: '#ffffff',
    },
});