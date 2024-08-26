import React from "react";
import { Pressable } from "react-native";
import { View, Text, Image } from "react-native-animatable";
import { XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

import { useSelector } from "react-redux";
import { selectedRestaurant } from "../../features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";

const MobileComponent = () => {
  const { restaurant } = useSelector(selectedRestaurant);
  const navigation = useNavigation()

  return (
    <View className="bg-orange-400 flex-1">
      <SafeAreaView className="z-10">
        <View className="justify-between items-center flex-row p-5">
          <Pressable onPress={() => {
            navigation.navigate("Home")
          }}>
            <XMarkIcon size={30} color="white" />
          </Pressable>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-gray-50 rouned mx-5 my-2 p-6 z-50 shadow-md border border-gray-200">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-gray-400">Essentiali arrival</Text>
              <Text className="font-bold text-lg">45-55 Minutes</Text>
            </View>
            <Image
              source={require("../../assets/bike.gif")}
              className="w-10 h-10"
            />
          </View>
          <Progress.Bar
            className="mt-1"
            progress={0.3}
            width={100}
            color="orange"
            indeterminate={true}
          />
          <Text className="xs text-gray-400 mt-2">You order at {restaurant.name} being prepared.</Text>
        </View>
      </SafeAreaView>
      <MapView
        className="z-0 -mt-14"
        style={{ flex: 1 }}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.name}
        />
      </MapView>

      <View className="bg-white flex-row justify-between items-center p-5">
        <View className="flex-row space-x-2 items-center">
          <Image
            className="w-12 h-12 rounded-full"
            source={{
              uri: "https://picsum.photos/200/300",
            }}
          />
          <View className="spacy-2">
            <Text className="text-lg">Title Karimy</Text>
            <Text className="text-xs text-gray-300">Subtitle for this</Text>
          </View>
        </View>
        <View className="">
          <Text className="text-orange-500">Call</Text>
        </View>
      </View>
    </View>
  );
};

export default MobileComponent;
