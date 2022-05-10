import { FC } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import '../styles/protected.page.scss';

export const ProtectedPage: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    navigate('/'); // redirect back to index
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Protected</h1>
      </header>
      <main className="content">
        <section className="info">
          {/* -- subject -- */}
          <section className="pair">
            <span className="key">subject</span>
            <span className="value">{auth.user?.profile.sub}</span>
          </section>

          {/* -- access token -- */}
          <section className="pair">
            <span className="key">access token</span>
            <span className="value">{auth.user?.access_token}</span>
          </section>

          {/* -- id token -- */}
          <section className="pair">
            <span className="key">id token</span>
            <span className="value">{auth.user?.id_token}</span>
          </section>
        </section>
      </main>
    </div>
  );
};
