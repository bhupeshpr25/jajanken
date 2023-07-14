import { useEffect, useState } from "react";
import { useOptions } from "../app/context/optionsContext";
import { Text, View } from "./Themed";
import { OptionActionType } from "../app/reducers/scoreReducerTypes";
import { checkWinner } from "../app/utils/checkWinner";
import { Animated, StyleSheet } from "react-native";

export default function ScoreAndResults() {
  const [timer, setTimer] = useState<number>(3);
  const optionsContext = useOptions();
  const { runTimer } = optionsContext.state;
  const { dispatch, options } = optionsContext;

  const playerHandIndex = optionsContext.state.playerHand;
  const playerHand = optionsContext.options[playerHandIndex];
  const playerHandName = playerHand ? playerHand.name : "";
  const playerHandIcon = playerHand ? playerHand.icon : null;
  const playerScore = optionsContext.state.score.player;

  const computerHandIndex = optionsContext.state.computerHand;
  const computerHand = optionsContext.options[computerHandIndex];
  const computerHandName = computerHand ? computerHand.name : "";
  const computerHandIcon = computerHand ? computerHand.icon : null;
  const computerScore = optionsContext.state.score.computer;

  const { winner, message } = optionsContext.state.results;

  useEffect(() => {
    if (runTimer) {
      const interval = setInterval(() => {
        setTimer((prevCount) => {
          if (prevCount === 1) {
            clearInterval(interval);
          }
          return prevCount - 1;
        });
      }, 1000);
    }
  }, [runTimer]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(3);
      dispatch({ type: OptionActionType.RUN_TIMER, payload: false });
      checkWinner(dispatch, playerHandName, computerHandName);
    }
  }, [timer]);

  const wobbleAnimation = new Animated.Value(0);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(wobbleAnimation, {
          toValue: -10,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(wobbleAnimation, {
          toValue: 10,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(wobbleAnimation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [wobbleAnimation]);

  return (
    <View className="flex justify-between ml-8">
      <View className="rounded-2xl justify-between bg-teal-500 w-10/12 h-48 m-3 p-1 shadow-xl">
        <View className="rounded-2xl flex flex-row items-center justify-between bg-teal-600 max-w-fit h-16 m-1 p-1 shadow-xl">
          <Text className="text-lg ml-2 font-bold text-gray-200">Computer</Text>
          <View className="rounded-2xl flex items-center justify-center bg-teal-500 w-12 h-12 m-1 p-1 shadow-xl">
            <Text className="text-lg font-bold text-gray-900">
              {computerScore}
            </Text>
          </View>
        </View>
        <View className="flex items-center justify-center bg-teal-500">
          <View className="rounded-2xl flex items-center justify-center bg-teal-500 w-24 h-24 m-1 p-1 shadow-xl">
            <Text className="text-lg font-bold text-gray-900">
              {runTimer && (
                <Animated.View
                  style={[
                    styles.wobblyAnimation,
                    { transform: [{ translateX: wobbleAnimation }] },
                  ]}
                  className="bg-teal-500"
                >
                  {options[0].icon}
                </Animated.View>
              )}
              {!runTimer && winner && (
                <View className="flex flex-col bg-teal-500">
                  <Text className="text-lg">{computerHandName}</Text>
                  <View className="bg-teal-500">{computerHandIcon}</View>
                </View>
              )}
            </Text>
          </View>
        </View>
      </View>

      {/* animation */}
      <View>
        {runTimer && (
          <Text className="my-2 text-lg uppercase font-bold text-blue-400 mr-8 self-center">
            {timer}
          </Text>
        )}
      </View>
      {/* styling */}
      {!runTimer && winner && (
        <Text className="my-2 text-lg uppercase font-bold text-blue-400 mr-8 self-center">
          {message}
        </Text>
      )}

      <View className="rounded-2xl bg-teal-500 w-10/12 h-48 m-3 p-1 shadow-xl">
        <View className="flex items-center justify-center bg-teal-500">
          <View className="rounded-2xl flex items-center justify-center bg-teal-500 w-24 h-24 m-1 p-1 shadow-xl">
            <View className="text-lg font-bold text-gray-900 bg-teal-500">
              {runTimer && (
                <Animated.View
                  style={[
                    styles.wobblyAnimation,
                    { transform: [{ translateX: wobbleAnimation }] },
                  ]}
                  className="bg-teal-500"
                >
                  {options[0].icon}
                </Animated.View>
              )}
              {!runTimer && winner && (
                <View className="flex flex-col bg-teal-500">
                  <View className="bg-teal-500">{playerHandIcon}</View>
                  <Text className="text-lg mt-2">{playerHandName}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <View className="rounded-2xl flex flex-row items-center justify-between bg-teal-600 max-w-fit h-16 m-1 p-1 shadow-xl">
          <Text className="text-lg ml-2 font-bold text-gray-200">You</Text>
          <View className="rounded-2xl flex items-center justify-center bg-teal-500 w-12 h-12 m-1 p-1 shadow-xl">
            <Text className="font-bold text-gray-900 text-xl">
              {playerScore}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#48BB78",
  },
  wobblyAnimation: {
    // Additional styling for the wobbly animation if needed
  },
});
