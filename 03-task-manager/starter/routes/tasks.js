const express = require("express");
const { getAllTasks, getTask, updateTask, deleteTask, createTask } = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;


//5.199.168.22:15672
//rabbitMQ password : - MyS3cur3Passwor_d
