import React from "react";
import { Platform } from "react-native";

function Delivery({ navigation }) {
  return <SelectionComponent />;
}

const SelectionComponent = Platform.select({
  web: () => require("../components/delivery/WebComponent").default,
  default: () => require("../components/delivery/MobileComponent").default,
})();

export default Delivery;
