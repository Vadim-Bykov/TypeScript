import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabNavigator } from './components/TabNav/TabNavigator';
import { HeaderContainer, NavLinkWrap } from './styled';
import styles from './Hedaer.module.css';

export const Header = () => {
  return (
    <HeaderContainer>
      <TabNavigator />

      <NavLinkWrap>
        <NavLink
          to='/home'
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Home
        </NavLink>
      </NavLinkWrap>
    </HeaderContainer>
  );
};

// "babel": {
//    "presets": [
//      "react-app"
//    ]
//  }
