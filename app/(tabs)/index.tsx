import { Image } from "react-native";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <View>
      <Image source={require("../../assets/images/jajanken-home.webp")} />
      <View className="self-center absolute mt-16 bg-transparent">
        <Text className="text-5xl text-teal-500 font-bold">jajanken</Text>
        <Text className="text-gray-300">a rock paper scissors game</Text>
      </View>
    </View>
  );
}
