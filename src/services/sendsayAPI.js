import Sendsay from 'sendsay-api';
import { CookieKey, deleteCookie } from 'utils/cookieFunctions';

const sendsayInstance = new Sendsay();
sendsayInstance.setSessionFromCookie(CookieKey.SENDSAY_SESSION_KEY);

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
    const userInfo = { account: response.account, sublogin: response.sublogin };
    localStorage.setItem('user_info', JSON.stringify(userInfo));
    document.cookie = `${CookieKey.SENDSAY_SESSION_KEY}=${sendsayInstance.session}`;
    return userInfo;
  },
).catch((e) => e);

export const logout = () => {
  deleteCookie(CookieKey.SENDSAY_SESSION_KEY);
  return sendsayInstance.request({ action: 'logout' }).catch(() => {});
};

export const sendRequest = (payload) => sendsayInstance.request(payload)
  .then((response) => response);
