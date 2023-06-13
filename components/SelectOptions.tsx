import { TouchableOpacity } from "react-native";
import { useOptions } from "../app/context/optionsContext";
import SingleOption from "./SingleOption";
import { Text, View } from "./Themed";
import { generateComputerHand } from "../app/utils/generateComputerHand";
import { OptionActionType } from "../app/reducers/scoreReducerTypes";

export default function SelectOptions() {
  const optionsContext = useOptions();

  const { dispatch } = optionsContext;

  const HandOptionsArray = optionsContext.options.map((hand, i) => (
    <SingleOption key={i} option={hand.name} icon={hand.icon} handIndex={i} />
  ));

  console.log(optionsContext.state);

  const play = () => {
    const randomNumber = generateComputerHand();

    dispatch({
      type: OptionActionType.UPDATE_COMPUTER_CHOICE,
      payload: randomNumber,
    });

    dispatch({ type: OptionActionType.RUN_TIMER, payload: true });
  };

  return (
    <>
      <View className="flex flex-row justify-evenly">{HandOptionsArray}</View>
      <View className="flex items-center justify-center mt-1">
        <TouchableOpacity
          className="rounded-2xl justify-center items-center bg-teal-500 w-32 h-16 m-4 p-1 shadow-xln"
          onPress={play}
        >
          <Text className="text-lg font-bold text-gray-900 sm:text-xl">
            START
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
