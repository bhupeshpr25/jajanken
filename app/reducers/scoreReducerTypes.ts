export enum OptionActionType {
  UPDATE_PLAYER_CHOICE = "UPDATE_PLAYER_CHOICE",
  UPDATE_COMPUTER_CHOICE = "UPDATE_COMPUTER_CHOICE",
  RUN_TIMER = "RUN_TIMER",
  DRAW = "DRAW",
  PLAYER_WINS = "PLAYER_WINS",
  COMPUTER_WINS = "COMPUTER_WINS",
}

interface UpdatePlayerChoice {
  type: OptionActionType.UPDATE_PLAYER_CHOICE;
  payload: number;
}

interface UpdateComputerChoice {
  type: OptionActionType.UPDATE_COMPUTER_CHOICE;
  payload: number;
}

interface RunTimer {
  type: OptionActionType.RUN_TIMER;
  payload: boolean;
}

interface Draw {
  type: OptionActionType.DRAW;
  payload: string;
}

interface PlayerWins {
  type: OptionActionType.PLAYER_WINS;
  payload: string;
}

interface ComputerWins {
  type: OptionActionType.COMPUTER_WINS;
  payload: string;
}

export type ActionTypes =
  | UpdatePlayerChoice
  | UpdateComputerChoice
  | RunTimer
  | Draw
  | PlayerWins
  | ComputerWins;
