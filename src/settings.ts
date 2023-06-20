import * as path from 'path';
import { join } from 'path';

/**
 * APP_NAME
 *
 * Name of application
 */
export const APP_NAME = 'nest-starter';

/**
 * APP_PORT
 *
 * Port for connection in the Application
 */
export const APP_PORT = <string>process.env.APP_PORT;

/**
 * APP_VERSION
 *
 * Application actual version
 */
export const APP_VERSION = <string>process.env.APP_VERSION || '1.0.0';

/**
 * APP_ROOT_DIR
 *
 * Directory root of application
 */
export const APP_ROOT_DIR = path.resolve(__dirname);

/**
 * IS_DEV
 *
 * Variable used for define the ambient is development
 */
export const IS_DEV = <string>process.env.NODE_ENV === 'development';

/**
 * POSTGRES_URL
 *
 * URL to make a postgres connection
 */
export const POSTGRES_URL = <string>process.env.POSTGRES_URL;

/**
 * DIR_NAME_ENTITIES
 *
 * Name of directory from entities
 */
export const DIR_NAME_ENTITIES: string = join(__dirname, 'modules', '**', '*Entity.{ts,js}');

/**
 * DIR_NAME_MIGRATIONS
 *
 * Name of directory from entities
 */
export const DIR_NAME_MIGRATIONS: string = join(__dirname, 'common', 'database', 'migrations',  '**', '*-Version.{ts,js}');

/**
 * APP_SECRET
 *
 * The secret used in encrypt
 */
export const APP_SECRET: string = <string>process.env.APP_SECRET;
