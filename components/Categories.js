import React, { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

function Categories() {
  const [data, setData] = useState([]);

  const fetchCategories = async () => {
    const query = `*[_type == "categories"]{name, imageURL}`;
    try {
      const result = await client.fetch(query);
      setData(() => result);
    } catch (error) {
      console.console("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      
      contentContainerStyle={{ padding: 10, justifyContent: "center", justifyItems: "center" }}
    >
      {data && data.map((item) => <CategoryCard
          key={item.name}
          imageURL={urlFor(item.imageURL).url()}
          title={item.name}
        />)}
    </ScrollView>
  );
}

export default Categories;



/*


   <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      contentContainerStyle={{ padding: 10 }}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <CategoryCard
          key={item._id}
          imageURL={urlFor(item.imageURL).url()}
          title={item.name}
        />
      )}
    />

*/
