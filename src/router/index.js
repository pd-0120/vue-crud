import { createRouter, createWebHistory } from "vue-router";
import AddTask from "./../components/AddTask.vue";
import ListTasks from "./../components/ListTasks.vue";
import EditTask from "./../components/EditTask.vue";

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
  },
  {
    path: "/edit-task/:id",
    component: EditTask,
    name: "EditTask",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
