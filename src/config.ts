import * as _ from 'lodash';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '../');
const APP_DIR = __dirname;
const NODE_ENV = _.defaultTo(process.env.NODE_ENV, 'dev');

const isDev  = NODE_ENV === 'dev';
const isProd = NODE_ENV === 'prod';
const isTest = NODE_ENV === 'test';

export const server = {
  port: _.defaultTo(process.env.PORT, 4444) as number,
  host: _.defaultTo(process.env.HOST, '0.0.0.0'),
  root: ROOT,
  appDir: APP_DIR
};

export const env = {
  isDev,
  isProd,
  isTest
};
