import { ActionTypes, OptionActionType } from "../reducers/scoreReducerTypes";

export const checkWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerHand: string,
  computerHand: string
) => {
  if (playerHand === "rock" && computerHand === "rock") {
    dispatch({ type: OptionActionType.DRAW, payload: "We have a draw" });
  } else if (playerHand === "rock" && computerHand === "paper") {
    dispatch({
      type: OptionActionType.COMPUTER_WINS,
      payload: "Computer wins! paper beats rock!",
    });
  } else if (playerHand === "rock" && computerHand === "scissors") {
    dispatch({
      type: OptionActionType.PLAYER_WINS,
      payload: "Player wins! rock beats scissors!",
    });
  } else if (playerHand === "paper" && computerHand === "rock") {
    dispatch({
      type: OptionActionType.PLAYER_WINS,
      payload: "Player wins! paper beats rock!",
    });
  } else if (playerHand === "paper" && computerHand === "paper") {
    dispatch({
      type: OptionActionType.DRAW,
      payload: "We have a draw",
    });
  } else if (playerHand === "paper" && computerHand === "scissors") {
    dispatch({
      type: OptionActionType.COMPUTER_WINS,
      payload: "Computer wins! scissors beat paper!",
    });
  } else if (playerHand === "scissors" && computerHand === "rock") {
    dispatch({
      type: OptionActionType.COMPUTER_WINS,
      payload: "Computer wins! rock beats scissors!",
    });
  } else if (playerHand === "scissors" && computerHand === "paper") {
    dispatch({
      type: OptionActionType.PLAYER_WINS,
      payload: "Player wins! scissors beat paper!",
    });
  } else if (playerHand === "scissors" && computerHand === "scissors") {
    dispatch({
      type: OptionActionType.DRAW,
      payload: "We have a draw",
    });
  }
};
