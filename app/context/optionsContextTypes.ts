import { ActionTypes } from "../reducers/scoreReducerTypes";

export enum HandOption {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export interface IOptions {
  name: HandOption;
  icon: JSX.Element;
}

export interface IoptionsContext {
  options: IOptions[];
  state: IInitialState;
  dispatch: React.Dispatch<ActionTypes>;
}

export interface Props {
  children: React.ReactNode;
}

interface IScore {
  player: number;
  computer: number;
}

interface IResults {
  winner: string;
  message: string;
}

export interface IInitialState {
  playerHand: number;
  computerHand: number;
  runTimer: boolean;
  score: IScore;
  results: IResults;
}
