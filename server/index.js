const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getInspiration } = require('./controller')

let list = []

let addNewTask = (req, res) => {
    console.log(req.body.task)
    let task = req.body.task
    console.log(task)
    list.push(task)
    res.status(200).send(list)
}

let deleteTask = (req, res) => {
    console.log(req)
    list.splice(req.body.element, 1)
    res.status(200).send(list)
}

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/tasks", addNewTask)
app.delete("/api/tasks", deleteTask)
app.get("/api/inspiration", getInspiration)

app.listen(4000, () => console.log("Server running on 4000"));
