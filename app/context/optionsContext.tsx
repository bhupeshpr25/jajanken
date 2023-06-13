import { createContext, useContext, useReducer } from "react";
import {
  HandOption,
  IOptions,
  IoptionsContext,
  Props,
} from "./optionsContextTypes";
import { FontAwesome } from "@expo/vector-icons";
import { initialState } from "./initialContextValues";
import scoreReducer from "../reducers/scoreReducer";

const options: IOptions[] = [
  {
    name: HandOption.rock,
    icon: <FontAwesome name="hand-rock-o" size={56} color="black" />,
  },
  {
    name: HandOption.paper,
    icon: <FontAwesome name="hand-paper-o" size={56} color="black" />,
  },
  {
    name: HandOption.scissors,
    icon: <FontAwesome name="hand-peace-o" size={56} color="black" />,
  },
];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
  state: initialState,
  dispatch: () => {},
});

export function OptionsProvider(props: Props) {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  const contextValue = {
    options,
    state,
    dispatch,
  };

  return (
    <OptionsContext.Provider value={contextValue}>
      {props.children}
    </OptionsContext.Provider>
  );
}

export function useOptions() {
  const context = useContext(OptionsContext);

  return context;
}
