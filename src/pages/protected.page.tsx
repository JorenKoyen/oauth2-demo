import { FC } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

export const ProtectedPage: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    navigate('/'); // redirect back to index
  }

  return <h1>Protected for now</h1>;
};
