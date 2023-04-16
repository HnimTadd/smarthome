import {
    Alert,
    Image,
    Text,
    TouchableOpacity,
    View,
    ViewBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import ToggleSwitch from "toggle-switch-react-native";

export default function Lock({ updateValue, device }) {
    return (
        <View className="flex flex-col w-full h-full items-center py-full">
            <TouchableOpacity
                className="items-center"
                onPress={() => {
                    if (device.value == 0) {
                        updateValue(1);
                    } else {
                        updateValue(0);
                    }
                }}
            >
                <Image
                    className="w-[300px] h-[315px] rounded-full static top-10"
                    source={require("../assets/lock-button.png")}
                    resizeMode="stretch"
                ></Image>
                <Image
                    className="h-[150px] w-[150px] absolute top-24 "
                    source={
                        device.value
                            ? require("../assets/lock.png")
                            : require("../assets/unlock.png")
                    }
                    resizeMode="stretch"
                ></Image>
            </TouchableOpacity>
        </View>
    );
}
