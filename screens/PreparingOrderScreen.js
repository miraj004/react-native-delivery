import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';


function PreparingOrderScreen({navigation}) {


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 3000);
  }, [])

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        className="flex justify-center items-center"
      >
        <Animatable.Image
          source={require("./../assets/car.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="h-48 w-48 rounded"
        />
        <Progress.Circle size={30} indeterminate={true} color="orange" className="mt-4" />
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-black/50 text-center mt-4"
        >
          Waiting for response...
        </Animatable.Text>
      </Animatable.View>

      
      

    </SafeAreaView>
  );
}

export default PreparingOrderScreen;
