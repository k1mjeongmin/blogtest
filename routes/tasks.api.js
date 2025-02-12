const express = require("express");
const {createTask} = require("../controllers/task.controller")

const router = express.Router()

//router.get("/", 보여주는 함수 실행)
router.post("/", createTask)
//router.put("/:id", 할일 수정 함수 실행)
//router.delete("/:id", 할일 삭제)    