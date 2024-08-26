import React, { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native-animatable";



const WebComponent = () => {
  return (
    <View className="bg-orange-400 flex-1 justify-center items-center">
    <Text className="text-white font-bold text-lg">This page is not supported on web!!!</Text>
  </View>
  )
}

export default WebComponent