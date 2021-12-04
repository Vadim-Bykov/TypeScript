import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../store/mainPage/selectors';
import { setTitle } from '../../store/mainPage/actions';
import { requestUsersData } from '../../store/mainPage/operations';
import { Container, H1 } from './Styled';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Main: React.FC = () => {
  const title = useSelector(selectors.getTitle);
  const users = useSelector(selectors.getUsers);
  const dispatch = useDispatch();

  const userNames = users.map((user: any) => <div>{user.name}</div>);

  const onrRenewTitle = (data: { Input_1: string }) => {
    dispatch(setTitle(data.Input_1));
  };

  const requestUsers = () => {
    dispatch(requestUsersData());
  };

  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  return (
    <Container>
      <H1>{title}</H1>
      <Controller
        control={control}
        name='Input_1'
        render={({ field: { onChange, value } }) => {
          return <Input placeholder='Ok.' value={value} onChange={onChange} />;
        }}
      />

      <Button variant='outlined' endIcon={<FavoriteIcon />}>
        Go
      </Button>
      <button onClick={handleSubmit(onrRenewTitle)}>set title</button>
      <button onClick={requestUsers}>get users</button>
      <button
        onClick={() => {
          navigate('/content/5');
        }}
      >
        Content
      </button>
      {users.length ? userNames : ''}
    </Container>
  );
};
