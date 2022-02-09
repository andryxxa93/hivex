import { IUser } from 'models/IUser';
import {
  AuthAction, AuthActionsEnum, AuthState, ErrorType,
} from './types';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: {} as ErrorType,
};

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action?.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: true, isLoading: false };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
