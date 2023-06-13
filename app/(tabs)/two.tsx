import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Button } from "react-native";
import ScoreAndResults from "../../components/ScoreAndResults";
import SelectOptions from "../../components/SelectOptions";

export default function TabTwoScreen() {
  return (
    <View>
      <ScoreAndResults />
      {/* options */}
      <SelectOptions />
    </View>
  );
}
