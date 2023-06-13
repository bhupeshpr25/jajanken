import { IInitialState } from "../context/optionsContextTypes";
import { ActionTypes, OptionActionType } from "./scoreReducerTypes";

export default function scoreReducer(
  state: IInitialState,
  action: ActionTypes
) {
  const { type, payload } = action;

  switch (type) {
    case OptionActionType.UPDATE_PLAYER_CHOICE:
      return {
        ...state,
        playerHand: payload,
        results: {
          winner: "",
          message: "",
        },
      };
    case OptionActionType.UPDATE_COMPUTER_CHOICE:
      return {
        ...state,
        computerHand: payload,
      };
    case OptionActionType.RUN_TIMER:
      return {
        ...state,
        runTimer: payload,
      };
    case OptionActionType.DRAW:
      return {
        ...state,
        results: {
          winner: "No Winner",
          message: payload,
        },
      };
    case OptionActionType.PLAYER_WINS:
      return {
        ...state,
        score: {
          ...state.score,
          player: state.score.player + 1,
        },
        results: {
          winner: "Player",
          message: payload,
        },
      };
    case OptionActionType.COMPUTER_WINS:
      return {
        ...state,
        score: {
          ...state.score,
          computer: state.score.computer + 1,
        },
        results: {
          winner: "Computer",
          message: payload,
        },
      };
    default:
      return {
        ...state,
        results: {
          winner: "error",
          message: "oops error",
        },
      };
  }
}
