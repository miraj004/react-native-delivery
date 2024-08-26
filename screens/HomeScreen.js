import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

const HomeScreen = ({ navigation }) => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const query = `*[_type == "featured"]{..., restuarants[]->{..., dishes[]->}}`;

      const result = await client.fetch(query);
      setFeaturedCategories(() => result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <View className="flex-row pb-3 items-center space-x-2 mx-4 ml-4 mt-8 p-2">
          <Image
            source={{
              uri: "https://picsum.photos/200/300",
            }}
            className="bg-gray-300 w-7 h-7 rounded-full p-4"
          />
          <View className="flex-1">
            <Text className="text-gray-400 text-xs">Devliry Now!</Text>
            <View className="flex-row space-x-2 items-center">
              <Text className="font-bold text-xl">Current Location</Text>
              <ChevronDownIcon size={20} color="orange" />
            </View>
          </View>
          <UserIcon size={35} color="orange" />
        </View>
        <View className="flex-row items-center mb-3 mx-4 space-x-2">
          <View className="rounded-2xl flex-1 flex-row bg-gray-50 border border-gray-100 p-3  items-center space-x-2">
            <MagnifyingGlassIcon size={20} color="#9999" />
            <TextInput className="flex-1" placeholder="Search" />
          </View>
          <AdjustmentsVerticalIcon color="orange" />
        </View>
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ padding: 5 }}
      >
        {/** Categories Section  */}
        <Categories />

        {/** Feacutred foods */}
        {featuredCategories &&
          featuredCategories.map((item) => (
            <FeaturedRow
              key={item.name}
              title={item.name}
              description={item.description}
              restuarants={item.restuarants}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
