import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export default class TypeOrmConfig{
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions{
        return {
            type: "postgres",
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            schema: configService.get('DB_SCHEMA'),
            entities: ["dist/**/*{.ts,.js}"],
            synchronize: true,
            retryDelay: 3000,
            retryAttempts: 10,
            logging: true,
        }
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): 
    Promise<TypeOrmModuleOptions> => TypeOrmConfig.
    getOrmConfig(configService),
    inject: [ConfigService]
};



