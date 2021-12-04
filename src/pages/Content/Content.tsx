import { Container } from './Styled';
import { useNavigate, useParams } from 'react-router';

export const Content: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Container>
      Content
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Main
      </button>
      {params?.id}
    </Container>
  );
};
