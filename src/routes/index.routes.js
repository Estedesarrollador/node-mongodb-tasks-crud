import { Router } from "express";
import * as taskCtrl from "../controllers/tasks.controller";

const router = Router();

router.get("/", taskCtrl.renderTasks);

router.post("/tasks/add", taskCtrl.createTask);

router.get("/tasks/:id/edit", taskCtrl.renderTaskEdit);

router.post("/tasks/:id/edit", taskCtrl.editTask);

router.get("/tasks/:id/delete", taskCtrl.deleteTask);

router.get("/tasks/:id/toggleDone", taskCtrl.taskToggleDone);

export default router;