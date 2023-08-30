/**
 * Created by eaTong on 2018/11/22 .
 * Description:
 */

const fs = require('fs-extra');
const path = require('path');

let config = {
  mysql: {
    user: "slyx",
    password: "123456",
    database: "slyx",
    host: "127.0.0.1"
  },
  wechat:{
    appId:'wx6a19624c223d35b4',
    appSecret:'c3d8113df61c5020b8910a767d6dec0d',
  },
  oss: {
    region: 'oss-cn-beijing',
    accessKeyId: '123',
    accessKeySecret: '123',
    bucket: 'eatong'
  },
};

if (fs.existsSync(path.resolve(__dirname, 'server.config.production.js'))) {
  config = require("./server.config.production")
}


module.exports = config;
