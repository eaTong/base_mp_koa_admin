/**
 * Created by eaTong on 2018/6/30 .
 * Description:
 */
const fs = require('fs-extra');
const path = require('path');
const {v4} = require('uuid');
const OSS = require('ali-oss');

const config = require('../../config/server.config');

module.exports = {
  uploadImage: async (ctx) => {
    const file = ctx.request.files.file;
    const originalFilename = file.name|| file.originalFilename;
    const fileName = v4() + originalFilename.slice(originalFilename.lastIndexOf('.'), originalFilename.length);
    const client = new OSS(config.oss);
    const result = await client.put(fileName, path.normalize(file.path || file.filepath));
    return result.url;
  },
  uploadFile: async (ctx) => {
    const file = ctx.request.files.file;
    const originalFilename = file.name|| file.originalFilename;
    const fileName = v4() + originalFilename.slice(originalFilename.lastIndexOf('.'), originalFilename.length);
    const client = new OSS(config.oss);
    const result = await client.put(fileName,  path.normalize(file.path || file.filepath));
    return result.url;
  }
};

