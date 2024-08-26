import { Pressable, ScrollView, Text, View, Image } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromBasket,
  selectedBasketItems,
} from "../features/basketSlice";
import { urlFor } from "../sanity";
import { formatter } from "../constants/currencyFormatter";

function BasketScreen({ navigation }) {
  const dishes = useSelector((state) => selectedBasketItems(state));
  const dispatch = useDispatch();

  const groupedDishes = useMemo(() => {
    return dishes.reduce((results, item) => {
      const restaurant = item.restaurantName;
      const dishId = item._id;
      if (!results[restaurant]) results[restaurant] = {};
      if (!results[restaurant][dishId]) results[restaurant][dishId] = [];
      results[restaurant][dishId].push(item);
      return results;
    }, {});
  }, [dishes]);

  return (
    <View className="flex-1">
  <View className="justify-center items-center bg-white mt-10 p-5">
    <Text className="text-lg font-bold">Basket</Text>
    <Text className="text-gray-400">Items in your basket</Text>
    <Pressable
      className="bg-orange-400 rounded-full p-2 absolute right-5 top-6"
      onPress={() => {
        navigation.goBack();
      }}
    >
      <XMarkIcon size={20} color="white" />
    </Pressable>
  </View>

  <View className="mt-2 bg-white flex-row justify-between p-5 items-center">
    <View className="flex-row justify-center items-center space-x-2">
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        className="w-8 h-8 rounded-full"
      />
      <Text>Delivery now</Text>
    </View>
    <Pressable onPress={() => {}} className="">
      <Text className="text-cyan-600">Change</Text>
    </Pressable>
  </View>

  <ScrollView
    className="bg-white mt-2 p-3 divide-y-2 divide-gray-100"
    style={{ paddingBottom: 100 }} // Adjusted padding
  >
    {Object.entries(groupedDishes).map(([restaurantName, dishesById]) => (
      <View key={restaurantName} className="mb-2">
        <Text className="text-lg font-bold my-2 text-gray-500">
          {restaurantName}
        </Text>
        {Object.entries(dishesById).map(([key, items]) => (
          <View
            key={key}
            className="flex-row items-center my-2 justify-between px-1"
          >
            <View className="flex-row space-x-2 items-center">
              <Text className="text-right">{items.length}x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.imageURL).url() }}
                className="w-8 h-8 rounded"
              />
              <Text>{items[0]?.name}</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Text className="font-semibold">
                {formatter.format(items[0]?.price * items.length)}
              </Text>
              <Pressable
                onPress={() => {
                  dispatch(
                    removeAllFromBasket({
                      id: key,
                      restaurantName: restaurantName,
                    })
                  );
                }}
              >
                <Text className="text-red-400">Remove</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    ))}
  </ScrollView>

  <View className="border-2 border-gray-100 rounded-t-lg p-5 bg-white">
    <View className="mb-5 space-y-2">
      <View className="flex-row justify-between">
        <Text className="text-gray-500">Subtotal</Text>
        <Text className="font-semibold">$20.34</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-500">Delivery Fee</Text>
        <Text className="font-semibold">$2.50</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-500">Total</Text>
        <Text className="font-semibold">$22.84</Text>
      </View>
    </View>
    <Pressable
      onPress={() => {

        navigation.navigate('PreparingOrderScreen')

      }}
      className="bg-orange-400 p-4 rounded-2xl"
    >
      <Text className="text-white font-bold text-center">Place Order</Text>
    </Pressable>
  </View>
</View>

  );
}

export default BasketScreen;
