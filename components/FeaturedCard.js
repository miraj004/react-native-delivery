import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

function FeaturedCard({
  item
}) {

  const navigation = useNavigation()

  return (
    <TouchableOpacity className="bg-white rounded-lg overflow-hidden shadow w-64 mr-4"
    onPress={() => navigation.navigate('Detail', {item})}
    >
      <Image
        source={{ uri: urlFor(item.imageURL).url() }}
        className="w-full h-40"
        resizeMode="cover"
      />
      <View className="p-3">
        <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
        <View className="flex-row space-x-1 items-center">
          <StarIcon color={"gold"} size={22} lat={0.5} />
          <Text className="text-xs text-gray-400">
            <Text className="text-amber-400">{item.rating}</Text> . {item.genre}
          </Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon size={18} color="gray" opacity={0.5} />
          <Text className="text-gray-400 text-xs">{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FeaturedCard;
