import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { urlFor } from "../sanity";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../features/basketSlice";
import { selectedRestaurant } from "../features/restaurantSlice";

const DishCard = ({ dish, basket, formatter }) => {
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();

  const [isPressed, setIsPressed] = useState(false);
  const { restaurant } = useSelector((state) => selectedRestaurant(state));

  useEffect(() => {
    setLength(
      () =>
        basket.filter(
          (item) =>
            item._id == dish._id && item.restaurantName == restaurant.name
        ).length
    );
  }, [basket, restaurant]);

  const handleAddToBasket = () => {
    dispatch(
      addToBasket({ item: { ...dish, restaurantName: restaurant.name } })
    );
  };

  const handleRemoveFromBasket = () => {
    if (length <= 0) return;
    dispatch(removeFromBasket({ id: dish._id, restaurantName: restaurant.name }));
  };

  return (
    <TouchableOpacity
      className="bg-white shadow-lg justify-center mb-4"
      key={dish._id}
      onPress={() => {
        setIsPressed((prev) => !prev);
      }}
    >
      <View className="p-5 justify-between flex-row space-x-4">
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-500">{dish.name}</Text>
          <Text className="text-xs text-gray-500 text-justify mt-2">
            {dish.short_description}
          </Text>
          <Text className="text-xl font-bold">
            {formatter.format(dish.price)}
          </Text>
        </View>
        <Image
          className="w-16 h-16 rounded mt-9"
          source={{ uri: urlFor(dish.imageURL).url() }}
        />
      </View>

      {isPressed && (
        <View className="flex-row p-5 items-center">
          <TouchableOpacity
            className="w-12 h-12 p-2 items-center justify-center"
            onPress={handleRemoveFromBasket}
          >
            <MinusCircleIcon size={40} color={length > 0 ? "orange" : "gray"} />
          </TouchableOpacity>
          <Text className="text-center w-8 h-8 text-xl">{length}</Text>
          <TouchableOpacity
            className="w-12 h-12 p-2 items-center justify-center"
            onPress={handleAddToBasket}
          >
            <PlusCircleIcon size={40} color={"orange"} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishCard;
