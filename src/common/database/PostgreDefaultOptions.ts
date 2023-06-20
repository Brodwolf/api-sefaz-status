import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { DIR_NAME_ENTITIES, DIR_NAME_MIGRATIONS, POSTGRES_URL } from '../../settings';

// const postgreUrl = POSTGRES_URL.substring(POSTGRES_URL.indexOf('://') + 3);
// const userName = postgreUrl.substring(0, postgreUrl.indexOf(':'));
// const password = postgreUrl.substring(postgreUrl.indexOf(':') + 1, postgreUrl.indexOf('@'));
// const postgreConnection = postgreUrl.substring(postgreUrl.indexOf('@') + 1);
// const hostname = postgreConnection.substring(0, postgreConnection.indexOf(':'));
// const port = postgreConnection.substring(postgreConnection.indexOf(':') + 1, postgreConnection.indexOf('/'));
// const database = postgreConnection.substring(postgreConnection.indexOf('/') + 1);


const userName = 'postgres';
const password = 'password';
const hostname = 'localhost';
const port = '6543';
const database = 'mydatabase';

// Make a connection with db postgres options from url env
export const PostgreDefaultOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: hostname,
  port: parseInt(port),
  username: userName,
  password,
  database,
  synchronize: false, // Don't change this env, use the migrations for make updates in database
  entities: [DIR_NAME_ENTITIES],
  migrations: [`${__dirname}/**/*.entity{.js,.ts}`],
};
