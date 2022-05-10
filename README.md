# oauth2-demo

A small demo project used to demonstrate how OAuth2.0 works.

## Setup

To start up the application you will have to launch the gravitee backend using docker compose.
The front end application can be started using `npm`. Make sure you configure your application correctly in gravitee and confirm that the settings in `src/config/oidc.ts` match your gravitee environment.

```bash
# start gravitee backend
docker compose -f env/local.yml up -d

# start react app
npm run start
```

## Informative links

- [OAuth2.0](https://oauth.net/2/)
- [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)
- [Gravitee](https://www.gravitee.io/)
- [oidc-client-ts](https://github.com/authts/oidc-client-ts)
- [react-oidc-context](https://www.npmjs.com/package/react-oidc-context)
