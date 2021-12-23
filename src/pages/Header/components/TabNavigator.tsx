import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ListSharp from '@mui/icons-material/ListSharp';
import { useLocation, useNavigate } from 'react-router';

const TAB_PATH = ['/home', '/content', '/account', '/infiniteList'];

export const TabNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.split('/')[1];
    const tabIndex = TAB_PATH.findIndex((path) => path === `/${pathname}`);
    const activeIndex = tabIndex >= 0 ? tabIndex : 0;
    setActiveTab(activeIndex);
  }, [location]);
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => {
    // setActiveTab(value);
    navigate(TAB_PATH[value]);
  };

  return (
    <Tabs value={activeTab} onChange={handleChange}>
      <Tab icon={<HomeIcon />} label='home' />
      <Tab icon={<ListIcon />} label='List' />
      <Tab icon={<PersonPinIcon />} label='person' />
      <Tab icon={<ListSharp />} label='Infinite' />
    </Tabs>
  );
};
