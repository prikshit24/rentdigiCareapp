import { ActivityIndicator, View } from "react-native";
import React from "react";


function Loading(props) {
    // alert(props.isLoading)
    return (
        <View
            style={{
                height: props.isLoading ? "100%" : 0,
                width: props.isLoading ? "100%" : 0,
                // height: 0,
                // width: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                position: "absolute"
            }}
        >
            {props.isLoading ? (
                <View style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
                    <View style={{ backgroundColor: "transparent", position: "absolute" }}>
                        <ActivityIndicator size="large" color="#00B4D8" />
                    </View>
                </View>
            ) : null}
        </View>
    );
}

export default Loading;
