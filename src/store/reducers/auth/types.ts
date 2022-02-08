import { IUser } from 'models/IUser';

export type ErrorType = {
 id: string,
 explain: string
}

export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: ErrorType;
  user: IUser;
}

export enum AuthActionsEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH,
  payload: boolean,
}

export interface SetIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING,
  payload: boolean,
}

export interface SetErrorAction {
  type: AuthActionsEnum.SET_ERROR,
  payload: string,
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER,
  payload: IUser,
}

export type AuthAction = SetAuthAction | SetIsLoadingAction | SetErrorAction | SetUserAction
