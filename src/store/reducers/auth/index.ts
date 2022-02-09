import { IUser } from 'models/IUser';
import {
  AuthAction, AuthActionsEnum, AuthState, ErrorType,
} from './types';

const initialState: AuthState = {
  isAuth: true,
  user: { account: 'account', sublogin: 'sublogin' } as IUser,
  isLoading: false,
  error: {} as ErrorType,
};

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action?.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionsEnum.SET_USER: {
      const user : IUser = { account: action.payload.account };
      if (action.payload.sublogin) {
        user.sublogin = action.payload.sublogin;
      }
      return { ...state, user }; }
    default:
      return state;
  }
}
