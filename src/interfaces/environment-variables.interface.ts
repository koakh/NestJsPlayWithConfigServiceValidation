export interface EnvironmentVariables {
  logger: string;
  httpsServerPort: number;
  httpsKeyFile: string;
  httpsCertFile: string;
  refreshTokenSkipIncrementVersion: boolean;
  corsOriginEnabled: boolean;
  corsOriginReactFrontend: string;
}
