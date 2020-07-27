import * as dotenv  from 'dotenv';
dotenv.config()

export = {
  host: process.env.HOST,
  type: process.env.TYPE,
  port: process.env.PORT,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
    entitiesDir: 'src/entity',
    subscribersDir: 'src/subscriber',
  },
}
