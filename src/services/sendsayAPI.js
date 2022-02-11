import Sendsay from 'sendsay-api';

const sendsayInstance = new Sendsay();
sendsayInstance.setSessionFromCookie('sendsay_session');

export const login = (
  credentions,
) => sendsayInstance.login({
  login: credentions.login,
  password: credentions.password,
  sublogin: credentions.sublogin,
}).then(() => {
  return sendsayInstance.request({ action: 'pong' });
}).then(
  (response) => {
    document.cookie = `sendsay_session=${sendsayInstance.session}`;
    return { account: response.account, sublogin: response.sublogin };
  },
).catch((e) => e);

export const logout = () => {
  return sendsayInstance.request({ action: 'logout' }).catch(() => {});
};

export const sendRequest = (payload) => sendsayInstance.request(payload)
  .then((response) => response);
