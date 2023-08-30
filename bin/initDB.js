/**
 * Created by eatong on 18-2-11.
 */
const User = require('../server/models/User');
//UPDATE_TAG:importModel

(async () => {
  await initialDatabaseStructure();
  process.exit();
})();

async function initialDatabaseStructure() {
  await User.sync({alter: true});
}
