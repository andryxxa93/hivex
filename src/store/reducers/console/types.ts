export interface HistoryObject {
  response: string,
  requestName: string,
  status: string,
  timeStamp: number,
}

export interface ConsoleState {
  history: HistoryObject[],
  request: string,
  response: string,
  isLoading: boolean,
  error: string,
}

export enum ConsoleActionsEnum {
  SET_HISTORY = 'SET_HISTORY',
  SET_ERROR = 'SET_ERROR',
  SET_REQUEST = 'SET_REQUEST',
  SET_RESPONSE = 'SET_RESPONSE',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetHistoryAction {
  type: ConsoleActionsEnum.SET_HISTORY,
  payload: HistoryObject,
}

export interface SetIsLoadingAction {
  type: ConsoleActionsEnum.SET_IS_LOADING,
  payload: boolean,
}

export interface SetErrorAction {
  type: ConsoleActionsEnum.SET_ERROR,
  payload: string,
}

export interface SetRequestAction {
  type: ConsoleActionsEnum.SET_REQUEST,
  payload: string,
}

export interface SetResponseAction {
  type: ConsoleActionsEnum.SET_RESPONSE,
  payload: Object,
}

export type ConsoleAction = SetHistoryAction
                        | SetIsLoadingAction
                        | SetErrorAction
                        | SetResponseAction
                        | SetRequestAction
