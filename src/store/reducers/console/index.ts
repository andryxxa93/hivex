import {
  ConsoleAction, ConsoleActionsEnum, ConsoleState, HistoryObject,
} from './types';

const initialState: ConsoleState = {
  history: [] as HistoryObject[],
  response: '',
  request: '',
  isLoading: false,
  error: '',
};

export default function authReducer(state = initialState, action: ConsoleAction) {
  switch (action.type) {
    case ConsoleActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ConsoleActionsEnum.SET_ERROR:
      return { ...state, error: action.payload };
    case ConsoleActionsEnum.SET_REQUEST:
      return { ...state, request: action.payload };
    case ConsoleActionsEnum.SET_RESPONSE:
      return { ...state, response: action.payload };
    case ConsoleActionsEnum.SET_HISTORY: {
      const history = [...state.history, action.payload]
        .sort((a, b) => +a.timeStamp - +b.timeStamp);
      return { ...state, history };
    }
    default:
      return state;
  }
}
