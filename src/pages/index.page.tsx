import { FC } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import '../styles/index.page.scss';

export const IndexPage: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="header">
        <h1>Welcome!</h1>
      </header>
      <main className="content">
        {auth.isAuthenticated ? (
          <button
            className="button"
            onClick={() => {
              navigate('/protected');
            }}
          >
            View Protected Page
          </button>
        ) : (
          <button className="button" onClick={() => auth.signinRedirect()}>
            Sign In
          </button>
        )}
      </main>
      <footer>
        Oauth2.0 / OIDC demo application by <span>Joren</span>
      </footer>
    </div>
  );
};
