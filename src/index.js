import './style.css';
import { introInbox } from './inbox';

import { addProject, addInboxTask, thisWeekTasks, thisDayTasks, projectsContainer } from './domstuff'



addProject();
addInboxTask();
thisWeekTasks();
thisDayTasks();
projectsContainer();
introInbox();




