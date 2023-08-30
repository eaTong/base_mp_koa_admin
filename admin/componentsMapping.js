import AdminIndexPage from '~/pages/AdminIndexPage';
import TaskPage from './pages/task/TaskPage';
import TimelinePage from './pages/timeline/TimelinePage';
import SpeakPage from './pages/speak/SpeakPage';
import LightupPage from './pages/lightup/LightupPage';
import NoticePage from './pages/notice/NoticePage';
import SharePage from './pages/share/SharePage';
//UPDATE_TAG:importPage

const componentsMapping = {
  '/admin/index': AdminIndexPage,
   '/admin/timeline': TimelinePage,
   '/admin/speak': SpeakPage,
   '/admin/lightup': LightupPage,
   '/admin/notice': NoticePage,
   '/admin/share': SharePage,
//UPDATE_TAG:addPageRoute
};

export default componentsMapping;
