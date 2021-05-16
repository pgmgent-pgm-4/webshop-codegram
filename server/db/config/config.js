// migrations/config/config.js
// import config from './config.json';
const config = require('./index.js');

const env = process.env.NODE_ENV || 'development';

module.exports =  {
  [env]: {
        url: config.sqlite3.migrate,
        dialect: 'sqlite3',
        migrationStorageTableName: 'SequelizeMeta'
      }
};