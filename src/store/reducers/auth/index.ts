import { AuthAction, AuthActionsEnum, AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
};

export default function authReducer(action: AuthAction, state = initialState): AuthState {
  switch (action?.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: true };
    default:
      return state;
  }
}
