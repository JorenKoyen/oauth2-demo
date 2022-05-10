import { AuthProviderProps } from 'react-oidc-context';

export const oidc: AuthProviderProps = {
  authority: 'http://localhost/am/demo/oidc',
  client_id: 'a6cf565d-8e8b-4c32-8f56-5d8e8bdc32a4',
  redirect_uri: 'http://localhost:3000/cb',
};
