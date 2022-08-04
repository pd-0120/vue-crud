import { createRouter, createWebHistory } from "vue-router";
import AddTask from "./../components/AddTask.vue";
import ListTasks from "./../components/ListTasks.vue";

const routes = [
  {
    path: "/add-task",
    component: AddTask,
  },
  {
    path: "/list-tasks",
    component: ListTasks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
