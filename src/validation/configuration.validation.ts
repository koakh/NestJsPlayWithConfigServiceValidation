import { plainToClass } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  logger: string;
  // @IsNumber()
  httpsServerPort: number;
  // @IsString()
  httpsKeyFile: string;
  // @IsString()
  httpsCertFile: string;
  // @IsString()
  refreshTokenSkipIncrementVersion: boolean;
  // @IsBoolean()
  corsOriginEnabled: boolean;
  // @IsString()
  corsOriginReactFrontend: string;
}

// TODO pasted from docs
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
