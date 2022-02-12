import AuthActionCreator from './auth/action-creators';
import ConsoleActionCreator from './console/action-creators';

const allActionCreators = {
  ...AuthActionCreator,
  ...ConsoleActionCreator,
};

export default allActionCreators;
