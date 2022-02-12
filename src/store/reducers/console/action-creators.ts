import { sendRequest } from 'services/sendsayAPI';
import {
  ConsoleActionsEnum,
  HistoryObject,
  SetErrorAction,
  SetHistoryAction,
  SetIsLoadingAction,
  SetRequestAction,
  SetResponseAction,
} from './types';

const ConsoleActionCreator = {
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => {
    return { type: ConsoleActionsEnum.SET_IS_LOADING, payload: isLoading };
  },
  setRequest: (request: string): SetRequestAction => {
    return { type: ConsoleActionsEnum.SET_REQUEST, payload: request };
  },
  setError: (error: string): SetErrorAction => {
    return { type: ConsoleActionsEnum.SET_ERROR, payload: error };
  },
  setResponse: (response: Object): SetResponseAction => {
    return { type: ConsoleActionsEnum.SET_RESPONSE, payload: response };
  },
  setHistory: (historyItem: HistoryObject): SetHistoryAction => {
    return { type: ConsoleActionsEnum.SET_HISTORY, payload: historyItem };
  },
  sendRequest: (request: string) => async (dispatch: any) => {
    const parsedReq = JSON.parse(request);
    const date = Date.now();
    dispatch(ConsoleActionCreator.setIsLoading(true));
    const dispatchingRequest = (response: any, status: 'ok' | 'error') => {
      dispatch(ConsoleActionCreator.setIsLoading(false));
      dispatch(ConsoleActionCreator.setResponse(response));
      dispatch(ConsoleActionCreator.setHistory(
        {
          requestName: parsedReq.action, response, timeStamp: date, status,
        },
      ));
    };
    try {
      const response = await sendRequest(parsedReq);
      dispatchingRequest(response, 'ok');
    } catch (response: any) {
      dispatchingRequest(response, 'error');
      dispatch(ConsoleActionCreator.setError(JSON.stringify(response.id)));
    }
  },
};

export default ConsoleActionCreator;
