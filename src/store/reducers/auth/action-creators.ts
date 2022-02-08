import { login as sendsayLogin, logout } from 'services/sendsayAPI';
import {
  AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction,
} from './types';

const AuthActionCreator = {
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => {
    return { type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading };
  },
  setError: (error: string): SetErrorAction => {
    return { type: AuthActionsEnum.SET_ERROR, payload: error };
  },
  setAuth: (isAuth: boolean): SetAuthAction => {
    return { type: AuthActionsEnum.SET_AUTH, payload: isAuth };
  },
  setUser: (account: string, sublogin: string) => {
    return { type: AuthActionsEnum.SET_USER, payload: { account, sublogin } };
  },
  login: (login: string, password: string, sublogin?: string) => async (dispatch: any) => {
    try {
      dispatch(AuthActionCreator.setIsLoading(true));
      const response = await sendsayLogin({ login, password, sublogin });
      if (response.id && response.id.includes('error')) {
        dispatch(AuthActionCreator.setIsLoading(true));
        dispatch(AuthActionCreator.setError(response));
      } else {
        dispatch(AuthActionCreator.setIsLoading(false));
        dispatch(AuthActionCreator.setAuth(true));
        dispatch(AuthActionCreator.setUser(response.account, response.sublogin));
      }
    } catch (error: any) {
      dispatch(AuthActionCreator.setIsLoading(false));
      dispatch(AuthActionCreator.setError(error));
    }
  },
  logout: () => async (dispatch: any) => {
    try {
      dispatch(AuthActionCreator.setAuth(false));
      logout();
    } catch (error: any) {
      dispatch(AuthActionCreator.setError(error));
    }
  },
};

export default AuthActionCreator;
