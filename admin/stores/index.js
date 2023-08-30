/**
 * Created by eaTong on 2018/6/16 .
 * Description:
 */
import AppStore from './AppStore';
import TaskStore from './TaskStore';
import TimelineStore from './TimelineStore';
import SpeakStore from './SpeakStore';
import LightupStore from './LightupStore';
import NoticeStore from './NoticeStore';
import ShareStore from './ShareStore';
//UPDATE_TAG:importStore

export default {
  app: new AppStore(),
  task: new TaskStore(),
timeline: new TimelineStore(),
speak: new SpeakStore(),
lightup: new LightupStore(),
notice: new NoticeStore(),
share: new ShareStore(),
//UPDATE_TAG:registerStore
}
