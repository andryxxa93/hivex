export enum LOCAL_STORAGE_KEYS {
  HISTORY_REQUEST = 'HISTORY_REQUEST'
}

export interface IRequest {
  action: string
}

export enum StatusesEnum {
  OK = 'ok',
  ERROR = 'error'
}

export interface IError {
  response: boolean,
  request: boolean,
}

export interface HistoryObject {
  response: string,
  requestName: string,
  request: string,
  status: StatusesEnum,
  timeStamp: number,
}

export interface ConsoleState {
  history: HistoryObject[],
  request: string,
  response: string,
  isLoading: boolean,
  error: IError,
}

export enum ConsoleActionsEnum {
  SET_HISTORY = 'SET_HISTORY',
  SET_ERROR = 'SET_ERROR',
  SET_REQUEST = 'SET_REQUEST',
  SET_RESPONSE = 'SET_RESPONSE',
  SET_IS_LOADING = 'SET_IS_LOADING',
  CLEAR_HISTORY = 'CLEAR_HISTORY',
}

export interface SetHistoryAction {
  type: ConsoleActionsEnum.SET_HISTORY,
  payload: HistoryObject | HistoryObject[],
}

export interface SetIsLoadingAction {
  type: ConsoleActionsEnum.SET_IS_LOADING,
  payload: boolean,
}

export interface SetErrorAction {
  type: ConsoleActionsEnum.SET_ERROR,
  payload: IError,
}

export interface SetRequestAction {
  type: ConsoleActionsEnum.SET_REQUEST,
  payload: string,
}

export interface SetResponseAction {
  type: ConsoleActionsEnum.SET_RESPONSE,
  payload: Object,
}

export interface ClearHistoryAction {
  type: ConsoleActionsEnum.CLEAR_HISTORY,
  payload: string,
}

export type ConsoleAction = SetHistoryAction
                        | SetIsLoadingAction
                        | SetErrorAction
                        | SetResponseAction
                        | SetRequestAction
                        | ClearHistoryAction
