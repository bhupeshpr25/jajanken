import { Linking } from "react-native";

import { Text, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";

export default function About() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View className="rounded-xl h-full flex items-center justify-between  border border-gray-700 bg-gray-800 p-4">
      <View className="bg-gray-800">
        <View className="flex items-center bg-gray-800 justify-center gap-4">
          <Text className="text-2xl font-medium text-white">Tech Stack</Text>
        </View>
        <View className="mt-4 rounded-lg  space-y-2">
          <View className="block rounded-lg  h-24 border border-gray-700 p-4">
            <Text className="font-medium text-xl text-teal-500">
              React Native with Expo
            </Text>

            <Text
              className="mt-1 font-medium text-gray-300"
              onPress={() => openLink("https://expo.dev/")}
            >
              https://expo.dev/
            </Text>
          </View>
        </View>
        <View className="mt-4 rounded-lg space-y-2">
          <View className="block rounded-lg  h-24 border border-gray-700 p-4">
            <Text className="font-medium text-xl text-teal-500">
              Typescript
            </Text>

            <Text
              className="mt-1 font-medium text-gray-300"
              onPress={() => openLink("https://www.typescriptlang.org/")}
            >
              https://www.typescriptlang.org/
            </Text>
          </View>
        </View>
        <View className="mt-4 rounded-lg space-y-2">
          <View className="block rounded-lg  h-24 border border-gray-700 p-4">
            <Text className="font-medium text-xl text-teal-500">
              NativeWind
            </Text>

            <Text
              className="mt-1 font-medium text-gray-300"
              onPress={() => openLink("https://www.nativewind.dev/")}
            >
              https://www.nativewind.dev/
            </Text>
          </View>
        </View>
      </View>

      <View className="rounded-lg bg-blue-400 space-y-2">
        <View className="rounded-lg flex flex-row border border-gray-700 p-4">
          <Ionicons name="md-logo-github" size={32} color="teal" />
          <Text
            className="mx-3 text-lg text-teal-500"
            onPress={() => openLink("https://github.com/bhupeshpr25/jajanken")}
          >
            source code
          </Text>
        </View>
      </View>
    </View>
  );
}
