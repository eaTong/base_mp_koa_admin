/**
 * Created by eaTong on 2018/11/22 .
 * Description:
 */


const Koa = require('koa');
const {createReadStream} = require('fs');
const koaBody = require('koa-body');
const koaConnect = require('koa-connect');
const compression = require('compression');
const cookie = require('koa-cookie').default;
const serve = require('koa-static');
const koaLogger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const queryString = require('query-string');
var cors = require('koa2-cors');

const router = require('./routers');
// const routes = require('../page-routes');
require('./framework/schedule');

const serverConfig = require('../config/server.config');

const port = 3006;

const app = new Koa();
app.use(koaConnect(compression()));
app.use(cookie());
app.use(koaLogger());
app.use(cors({
  origin: function (ctx) {
    const origin = ctx.req.headers.origin;
    if (/localhost/.test(origin)) {
      return origin;
    }
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
//use koaBody to resolve data
app.use(koaBody({multipart: true}));

app.use(async (ctx, next) => {
  if (ctx.request.method === 'GET' && /.*\?/.test(ctx.request.url)) {
    ctx.request.body = queryString.parse(ctx.request.url.replace(/.*\?/, ''));
  }
  await next();
});

app.use(serve('adminDist', {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true,
  hidden: true
}));
app.use(serve('assets', {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true,
  hidden: true
}));

app.keys = ['key-for-eaTong'];
app.use(session({
  store: new MysqlStore(serverConfig.mysql),
  rolling: true,
  cookie: {
    maxage: 24 * 60 * 60 * 1000
  }
}));
router.get('/login', async ctx => {
  ctx.type = 'html';
  ctx.body = createReadStream('adminDist/admin.html');
});

router.get('/admin', async ctx => {
  ctx.type = 'html';
  ctx.body = createReadStream('adminDist/admin.html');
});

router.get('/', async ctx => {
  ctx.type = 'html';
  ctx.body = createReadStream('adminDist/admin.html');
});

app.use(router.routes());

app.use(async (ctx,next) => {
  ctx.respond = false;
  ctx.res.statusCode = 200; // because koa defaults to 404
  await next();
});

app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`)
});
