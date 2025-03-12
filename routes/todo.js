const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");

router.get("/", auth, getAllTodo);

router.post("/", auth, postCreateTodo);

router.put("/:id", auth, putUpdateTodo);

router.delete("/:id", auth, deleteTodo);

module.exports = router;