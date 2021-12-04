import React, { SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useNavigate } from 'react-router';

const TAB_PATH = ['/', 'content', 'content/5'];

export const TabNavigator = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setValue(value);
    navigate(TAB_PATH[value]);
    console.log({ event, value });
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab icon={<PhoneIcon />} label='phone' />
      <Tab icon={<FavoriteIcon />} label='favorite' />
      <Tab icon={<PersonPinIcon />} label='person' />
    </Tabs>
  );
};
