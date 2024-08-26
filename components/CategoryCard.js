import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

function CategoryCard({imageURL, title}) {

  
  return (
    <TouchableOpacity className="relative bg-white rounded-lg overflow-hidden m-2">
      <Image
        source={{ uri: imageURL }}
        className="w-32 h-32"
        resizeMode="cover"
      />
      <Text className="absolute bottom-1 left-1 text-white text-lg font-bold bg-black/50 px-2 py-1 rounded">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoryCard;
