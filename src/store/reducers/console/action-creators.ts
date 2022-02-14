import { sendRequest } from 'services/sendsayAPI';
import isValidJSON from 'utils/isValidJSON';
import {
  ClearHistoryAction,
  ConsoleActionsEnum,
  HistoryObject,
  IError,
  IRequest,
  SetErrorAction,
  SetHistoryAction,
  SetIsLoadingAction,
  SetRequestAction,
  SetResponseAction,
  StatusesEnum,
} from './types';

const ConsoleActionCreator = {
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => {
    return { type: ConsoleActionsEnum.SET_IS_LOADING, payload: isLoading };
  },
  setRequest: (request: string): SetRequestAction => {
    return { type: ConsoleActionsEnum.SET_REQUEST, payload: request };
  },
  setError: (error: IError): SetErrorAction => {
    return { type: ConsoleActionsEnum.SET_ERROR, payload: error };
  },
  setResponse: (response: Object): SetResponseAction => {
    return { type: ConsoleActionsEnum.SET_RESPONSE, payload: response };
  },
  setHistory: (historyItem: HistoryObject | HistoryObject[]): SetHistoryAction => {
    return { type: ConsoleActionsEnum.SET_HISTORY, payload: historyItem };
  },
  clearHistory: (item: string): ClearHistoryAction => {
    return { type: ConsoleActionsEnum.CLEAR_HISTORY, payload: item };
  },
  sendRequest: (request: string) => async (dispatch: any) => {
    if (!isValidJSON(request)) {
      dispatch(ConsoleActionCreator.setError({ response: false, request: true }));
      return;
    }
    const parsedReq = JSON.parse(request) as IRequest;
    const date = Date.now();
    dispatch(ConsoleActionCreator.setIsLoading(true));
    const dispatchingRequest = (response: any, status: StatusesEnum) => {
      dispatch(ConsoleActionCreator.setIsLoading(false));
      dispatch(ConsoleActionCreator.setResponse(response));
      dispatch(ConsoleActionCreator.setHistory(
        {
          request, requestName: parsedReq.action, response, timeStamp: date, status,
        },
      ));
    };
    try {
      const response = await sendRequest(parsedReq);
      dispatchingRequest(response, StatusesEnum.OK);
    } catch (response: any) {
      dispatchingRequest(response, StatusesEnum.ERROR);
      dispatch(ConsoleActionCreator.setError({ request: true, response: true }));
    }
  },
};

export default ConsoleActionCreator;
