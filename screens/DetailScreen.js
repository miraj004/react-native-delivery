import { useEffect, useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishCard from "../components/DishCard";

import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedBasketItems,
  selectedBasketItemsTotalPrice,
} from "../features/basketSlice";
import { setRestaurant } from "../features/restaurantSlice";
import { formatter } from "../constants/currencyFormatter";

function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  const basketItems = useSelector((state) => selectedBasketItems(state));
  const totalPrice = useSelector((state) =>
    selectedBasketItemsTotalPrice(state)
  );

  
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(setRestaurant(item));
    
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="relative">
          <Image
            source={{ uri: urlFor(item.imageURL).url() }}
            className="w-full h-48 p-4"
          />
          <TouchableOpacity
            className="absolute w-10 h-10 justify-center items-center rounded-full left-1 top-10 bg-white"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeftIcon size={20} color={"orange"} />
          </TouchableOpacity>
        </View>
        <View className="p-5 bg-white">
          <Text className=" text-2xl font-bold text-gray-800">
            {item.name}
          </Text>
          <View className="flex-row space-x-2">
            <View className="flex-row space-x-1 items-center">
              <StarIcon color={"gold"} size={22} lat={0.5} />
              <Text className="text-xs text-gray-400">
                <Text className="text-amber-400">{item.rating}</Text> .{" "}
                {item.genre}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={18} color="gray" opacity={0.5} />
              <Text className="text-gray-400 text-xs">{item.address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-3">{item.short_description}</Text>
        </View>
        <TouchableOpacity
          className="p-5 flex-row items-center bg-white border border-gray-200"
          onPress={() => {
            // TODO
          }}
        >
          <View className="flex-row space-x-2 items-center flex-1">
            <QuestionMarkCircleIcon size={22} color="gray" />
            <Text className="font-bold text-gray-600 text-lg">
              Have a food allergy?
            </Text>
          </View>
          <ArrowRightIcon size={20} color="gray" />
        </TouchableOpacity>

        <Text className="bg-gray-100 text-left p-3 text-lg font-bold text-gray-400">
          Menu
        </Text>

        <View className="bg-gray">
          {item.dishes &&
            item.dishes.map((dish) => (
              <DishCard
                key={dish.name}
                dish={dish}
                basket={basketItems}
                formatter={formatter}
              />
            ))}
        </View>
      </ScrollView>

      {basketItems.length > 0 && (
        <TouchableOpacity
          className="absolute bottom-2 rounded left-2 right-2 bg-amber-500 shadow-md p-4 items-center"
          onPress={() => {
            navigation.navigate("Basket");
          }}
        >
          <Text className="text-white font-bold">
            {basketItems.length} item(s) in the basket{" "}
            {formatter.format(totalPrice)}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}



export default DetailScreen;
