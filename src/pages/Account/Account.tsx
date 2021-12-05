import { Button } from '@mui/material';
import React from 'react';
import { AccountWrap } from './accountStyles';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';

export const Account = () => {
  const navigate = useNavigate();
  return (
    <AccountWrap>
      Account
      <Button
        variant='contained'
        startIcon={<HomeIcon />}
        onClick={() => navigate('/')}
        style={{ marginLeft: 20 }}
      >
        go to Home
      </Button>
    </AccountWrap>
  );
};
