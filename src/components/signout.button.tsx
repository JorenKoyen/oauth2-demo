import { FC } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import './signout.button.scss';

export const SignOutButton: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.removeUser();
    navigate('/');
  };

  if (!auth.isAuthenticated) return null;
  return (
    <button onClick={handleSignOut} className="sign-out">
      Sign Out
    </button>
  );
};
