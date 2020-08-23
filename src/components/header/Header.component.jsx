import React from 'react';

import './Header.styles.scss';

import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../../state/state-provider';

function Header() {
  const [{ currentUser }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={currentUser?.userName}
          src={currentUser?.userImage}
        />

        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input
          type="text"
          className="header__search_input"
          placeholder="Search Me"
        />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
