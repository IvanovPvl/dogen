import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import * as morgan from 'koa-morgan';

import { server as srv } from './config';
import routes from './routes';

const app = new Koa();
app.use(morgan('tiny'));
app.use(koaBody());
app.use(routes.routes());
const server = app.listen(srv.port);

export default server;
