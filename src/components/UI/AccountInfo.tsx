import { IUser } from 'models/IUser';
import React, { FC } from 'react';
import 'styles/components/AccountInfo.scss';

interface IAccountInfo {
  user: IUser
}

const AccountInfo: FC<IAccountInfo> = ({ user }) => {
  return (
    <div className="account-info">
      <span>{user.account}</span>
      {user.sublogin && (
      <span>
          {' '}
          {user.sublogin}
      </span>
      )}
    </div>
  );
};

export default AccountInfo;
