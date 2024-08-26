import React from "react";
import { View, Text, ScrollView } from "react-native";
import FeaturedCard from "./FeaturedCard";

import { ArrowRightIcon } from "react-native-heroicons/outline";

function FeaturedRow({ title, description, restuarants }) {
  return (
    <View className="mt-4">
      <View className="px-5 mb-5 ">
        <View className="flex-row justify-between items-center flex-1">
          <Text className="text-lg font-bold text-gray-900">{title}</Text>
          <ArrowRightIcon size={20} color="orange" />
        </View>
        <Text className="text-xs text-gray-400">{description}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
      >
        {restuarants &&
          restuarants.map((item) => (
            <FeaturedCard key={item.name} item={item} />
          ))}
      </ScrollView>
    </View>
  );
}

export default FeaturedRow;

/*

    <FlatList
        data={restuarants}
        horizontal
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <FeaturedCard key={item._id} item={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 5,
          paddingBottom: 15,
        }}
      />

*/
