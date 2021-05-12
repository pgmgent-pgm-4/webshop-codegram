// migrations/config/config.js
import config from './config.json';

const env = process.env.NODE_ENV || 'development';

export default {
  [env]: {
        url: config.sqlite3.migrate,
        dialect: 'sqlite3',
        migrationStorageTableName: 'SequelizeMeta'
      }
};