const {wechat} = require("../../config/server.config");
const axios = require('axios');
const moment = require('moment');

async function getAccessToken() {
  if (global.wechatAccessToken && global.wechatAccessToken.expire > new Date().getTime()) {
    return global.wechatAccessToken.accessToken;
  } else {
    // https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wechat.appId}&secret=${wechat.appSecret}`
    const result = await axios.get(url);
    const data = result.data;
    global.wechatAccessToken = {
      expire: new Date().getTime() + data.expires_in,
      accessToken: data.access_token
    }
    return data.access_token;
  }
}

async function sendQuestionMessage(openId, questionId, templateId = 'hXbFMtZJvxDc6uvKDrhiIgpZ46YmytZWRA5UPpIGyxQ') {
  const accessToken = await getAccessToken();
  const url = `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${accessToken}`;
  const result = await axios.post(url, {
    openId,
    touser: openId,
    template_id: templateId,
    page: `/pages/question-detail/question-detail?questionId=${questionId}`,
    data: {
      thing2: {value: '您的提问/订阅有新的回答哦，点击查看'},
      time3: {value: moment().format('yyyy-MM-DD HH:mm')},
    }
  });
}

async function sendToMultiple(openIds, questionId, templateId = 'hXbFMtZJvxDc6uvKDrhiIgpZ46YmytZWRA5UPpIGyxQ') {
  openIds.forEach(openId => sendQuestionMessage(openId, questionId, templateId));
}

module.exports = {
  getAccessToken,
  sendQuestionMessage,
  sendToMultiple,
};


sendQuestionMessage('okkw55RzSpXY73FLx5U06J6V98qQ', '1').catch(ex => console.log(ex))
