//1.할일 추가
//2.할일 보여주기
//3. 할일 수정
//4. 할일 삭제

const express = require("express")
const router = express.Router()
const taskApi = require("./tasks.api")

router.use("/tasks",taskApi)

module.exports =router
