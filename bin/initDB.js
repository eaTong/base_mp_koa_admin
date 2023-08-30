/**
 * Created by eatong on 18-2-11.
 */
const User = require('../server/models/User');
const LightUpRecords = require('../server/models/LightUpRecords');
const Speak = require('../server/models/Speak');
const Config = require('../server/models/Config');
const Timeline = require('../server/models/Timeline');
const Notice = require('../server/models/Notice');
const Share = require('../server/models/Share');
//UPDATE_TAG:importModel

(async () => {
  await initialDatabaseStructure();
  process.exit();
})();

async function initialDatabaseStructure() {
  await User.sync({alter: true});
  await LightUpRecords.sync({alter: true});
  await Speak.sync({alter: true});
  await Config.sync({alter: true});
  await Timeline.sync({alter: true});
  await Notice.sync({alter: true});
}
