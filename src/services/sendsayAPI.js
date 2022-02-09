import Sendsay from 'sendsay-api';

const sendsayInstance = new Sendsay();

export const login = (
  credentions,
) => sendsayInstance.login({
  login: credentions.login,
  password: credentions.password,
  sublogin: credentions.sublogin,
}).then(() => {
  return sendsayInstance.request({ action: 'pong' });
}).then(
  (response) => ({ account: response.account, sublogin: response.sublogin }),
).catch((e) => e);

export const logout = () => {
  return sendsayInstance.request({ action: 'logout' }).catch(() => {});
};
