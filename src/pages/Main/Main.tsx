import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../store/mainPage/selectors';
import { setTitle } from '../../store/mainPage/actions';
import { requestUsersData } from '../../store/mainPage/operations';
import { Container, H1, Error } from './Styled';
import { useNavigate } from 'react-router';
import { Controller, useController, useForm } from 'react-hook-form';
import { Button, Input } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Main: React.FC = () => {
  const title = useSelector(selectors.getTitle);
  const users = useSelector(selectors.getUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userNames = users.map((user: any) => <div>{user.name}</div>);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    field,
    fieldState: { error, invalid },
    // formState: { errors },
  } = useController({
    name: 'Input_2',
    control,
    rules: {
      required: { value: true, message: 'Input_2 is required' },
      minLength: { value: 10, message: 'minLength 10 characters' },
    },
    defaultValue: 'Good value',
  });

  const onrRenewTitle = (data: { Input_1: string; Input_2: string }) => {
    dispatch(setTitle(data.Input_1));
    // console.log({ Input_1: data.Input_1, Input_2: data.Input_2 });

    reset({ Input_1: 'I-1', Input_2: 'I-2' });
  };

  const requestUsers = () => {
    dispatch(requestUsersData());
  };

  return (
    <Container>
      <H1>{title}</H1>
      <Controller
        control={control}
        name='Input_1'
        rules={{
          required: { value: true, message: 'Input_1 is required' },
          minLength: { value: 10, message: 'minLength 10 characters' },
        }}
        render={({ field: { onChange, value } }) => {
          return (
            <Input placeholder='Input_1.' value={value} onChange={onChange} />
          );
        }}
      />
      <Error>{errors['Input_1']?.message}</Error>
      <div />

      <Input
        placeholder='Input_2.'
        value={field.value}
        onChange={field.onChange}
      />
      {invalid && <Error>{error?.message}</Error>}

      <div />

      <Button variant='outlined' onClick={handleSubmit(onrRenewTitle)}>
        set title
      </Button>
      <Button variant='outlined' onClick={requestUsers}>
        get users
      </Button>
      <Button
        variant='outlined'
        endIcon={<FavoriteIcon />}
        onClick={() => {
          navigate('/content');
        }}
      >
        Content
      </Button>
      {users.length ? userNames : ''}
    </Container>
  );
};
