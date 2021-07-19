import { Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, validateSync } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  logger: string;
  @IsNumber()
  httpsServerPort: number;
  @IsString()
  httpsKeyFile: string;
  @IsString()
  httpsCertFile: string;
  @IsString()
  refreshTokenSkipIncrementVersion: boolean;
  @IsBoolean()
  corsOriginEnabled: boolean;
  @IsString()
  corsOriginReactFrontend: string;
}

export function validate(config: Record<string, unknown>) {
  Logger.log(JSON.stringify(config, undefined, 2));
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
