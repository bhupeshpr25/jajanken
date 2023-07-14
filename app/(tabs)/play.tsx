import { View } from "../../components/Themed";
import ScoreAndResults from "../../components/ScoreAndResults";
import SelectOptions from "../../components/SelectOptions";

export default function PlayScreen() {
  return (
    <View>
      <ScoreAndResults />
      <SelectOptions />
    </View>
  );
}
