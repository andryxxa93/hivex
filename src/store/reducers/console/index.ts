import {
  ConsoleAction, ConsoleActionsEnum, ConsoleState, HistoryObject, LOCAL_STORAGE_KEYS,
} from './types';

const initialState: ConsoleState = {
  history: [] as HistoryObject[],
  response: '',
  request: '',
  isLoading: false,
  error: { request: false, response: false },
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
    case ConsoleActionsEnum.CLEAR_HISTORY: {
      if (action.payload === 'all') {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.HISTORY_REQUEST);
        return { ...state, history: [] };
      }
      const newHistory = state.history.filter((item) => item.requestName !== action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEYS.HISTORY_REQUEST, JSON.stringify(newHistory));
      return { ...state, history: newHistory }; }
    case ConsoleActionsEnum.SET_HISTORY: {
      if (action.payload instanceof Array) {
        const history = action.payload;
        return { ...state, history };
      }
      const {
        requestName, response, timeStamp, status, request,
      } = action.payload;
      const elementInHistory = state.history.find((elem) => {
        return elem.requestName === requestName;
      });
      let history;
      if (elementInHistory) {
        history = state.history.map((elem) => {
          if (elem.requestName !== requestName) {
            return elem;
          }
          return {
            request, requestName, timeStamp, status, response,
          };
        });
      } else {
        history = [...state.history];
        history.push(action.payload);
      }
      history.sort((a, b) => (+b.timeStamp - +a.timeStamp));
      localStorage.setItem(LOCAL_STORAGE_KEYS.HISTORY_REQUEST, JSON.stringify(history));
      return { ...state, history };
    }
    default:
      return state;
  }
}
