import * as path from 'path'

/**
 * APP_NAME
 *
 * Name of application
 */
export const APP_NAME = 'api-sefaz-status-notification'

/**
 * APP_PORT
 *
 * Port for connection in the Application
 */
export const APP_PORT = <string>process.env.APP_PORT

/**
 * APP_VERSION
 *
 * Application actual version
 */
export const APP_VERSION = <string>process.env.APP_VERSION || '1.0.0'

/**
 * APP_ROOT_DIR
 *
 * Directory root of application
 */
export const APP_ROOT_DIR = path.resolve(__dirname)

/**
 * IS_DEV
 *
 * Variable used for define the ambient is development
 */
export const IS_DEV = <string>process.env.IS_DEV
/**
 * APP_SECRET
 *
 * The secret used in encrypt
 */
export const APP_SECRET: string = <string>process.env.APP_SECRET
