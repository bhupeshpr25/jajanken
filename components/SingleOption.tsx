import { useEffect, useState } from "react";
import { Text, View } from "./Themed";
import { TouchableOpacity } from "react-native";
import { OptionActionType } from "../app/reducers/scoreReducerTypes";
import { useOptions } from "../app/context/optionsContext";

interface Props {
  option: string;
  icon: JSX.Element;
  handIndex: number;
}

const SingleOption: React.FC<Props> = ({ option, icon, handIndex }) => {
  const [handPressed, setHandPressed] = useState<boolean>(false);
  const optionsContext = useOptions();

  const { dispatch, state } = optionsContext;

  const selectedHand = state.playerHand;

  const selectOption = (index: number) => {
    dispatch({ type: OptionActionType.UPDATE_PLAYER_CHOICE, payload: index });
    setHandPressed(true);
  };

  useEffect(() => {
    // Deselect the first option when component is mounted
    if (handIndex === 0 && selectedHand === handIndex) {
      dispatch({ type: OptionActionType.UPDATE_PLAYER_CHOICE, payload: -1 });
      setHandPressed(false);
    }
  }, []); // Run only once when component is mounted

  console.log(state);
  return (
    <TouchableOpacity
      onPress={() => selectOption(handIndex)}
      className={`rounded-2xl w-28 h-28 ml-2 p-1 shadow-xl flex items-center justify-center ${
        selectedHand === handIndex ? "bg-blue-400" : "bg-teal-500"
      }`}
    >
      <Text className="font-bold text-gray-800 mb-2">{option}</Text>
      <View
        className={`${
          selectedHand === handIndex ? "bg-blue-400" : "bg-teal-500"
        }`}
      >
        {icon}
      </View>
    </TouchableOpacity>
  );
};

export default SingleOption;
