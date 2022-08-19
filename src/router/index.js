import { createRouter, createWebHistory } from "vue-router";
import AddTask from "./../components/AddTask.vue";
import ListTasks from "./../components/ListTasks.vue";
import EditTask from "./../components/EditTask.vue";
import Error404 from "./../components/Error404.vue";

const routes = [
  {
    path: "/add-task",
    component: AddTask,
    name: "AddTask",
  },
  {
    path: "/list-tasks",
    component: ListTasks,
    name: "ListTasks",
    alias: "/",
  },
  {
    path: "/edit-task/:id",
    component: EditTask,
    name: "EditTask",
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: Error404,
    meta: {
      requireAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
