import { EnvironmentVariables } from '../validation';

export const configuration = (): EnvironmentVariables => ({
  logger: process.env.APP_LOGGER || 'error,warn',
  httpsServerPort: parseInt(process.env.HTTPS_SERVER_PORT, 10) || 3443,
  httpsKeyFile: process.env.HTTPS_KEY_FILE || 'config/privkey.pem',
  httpsCertFile: process.env.HTTPS_CERT_FILE || 'config/fullchain.pem',
  refreshTokenSkipIncrementVersion: process.env.REFRESH_TOKEN_SKIP_INCREMENT_VERSION === 'true' ? true : false,
  corsOriginEnabled: process.env.CORS_ORIGIN_ENABLED === 'true' ? true : false,
  corsOriginReactFrontend: process.env.CORS_ORIGIN_REACT_FRONTEND || 'https://localhost:3000',
});
