/* eslint-disable no-useless-escape */

type OptionsFields = {
  expires?: Date | string,
  'max-age'?: number,
}

export enum CookieKey {
  SENDSAY_SESSION_KEY = 'sendsay_session'
}

export const findCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (
  name: string,
  value: string,
  options: OptionsFields = {} as OptionsFields,
) => {
  const newOptions = {
    path: '/',
    ...options,
  };

  if (newOptions.expires instanceof Date) {
    newOptions.expires = newOptions.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = newOptions[optionKey as keyof OptionsFields];
    if (!optionValue) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
};

export function deleteCookie(name: string) {
  setCookie(name, '', {
    'max-age': -1,
  });
}
