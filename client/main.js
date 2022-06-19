const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortuneButton")
const textInput = document.getElementById("taskInput")
const list = document.getElementById("tasks")
const listSubmit = document.getElementById("submitTask")
const removeItem = document.getElementById("removeTaskButton")
const inspirationButton = document.getElementById("inspirationButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
    .then(res => {
        const fortune = res.data
        alert(fortune)
    })
}

const getInspiration = () => {
    axios.get("http://localhost:4000/api/inspiration")
    .then(res => {
        const inspiration = res.data
        alert(inspiration)
    })
}

const addTask = (event) => {
    event.preventDefault()
    axios.post("http://localhost:4000/api/tasks", {"task": document.getElementById("taskInput").value})
    .then(res => {
        console.log(document.getElementById("taskInput").value)
        list.innerHTML = ""
        console.log(res.data)
        for(i = 0; i < res.data.length; i++){
            let listElement = document.createElement("li")
            listElement.innerHTML = res.data[i]
            list.append(listElement)
        }
    })
}

const removeTask = (event) => {
    event.preventDefault()
    axios.delete("http://localhost:4000/api/tasks", {data: {"element": document.getElementById("removeTask").value}})
    .then(res => {
        console.log(document.getElementById("removeTask").value)
        list.innerHTML = ""
        for(i = 0; i < res.data.length; i++){
            let listElement = document.createElement("li")
            listElement.innerHTML = res.data[i]
            list.append(listElement)
        }
    })
}


fortuneButton.addEventListener("click", getFortune)
complimentBtn.addEventListener('click', getCompliment)
listSubmit.addEventListener("click", addTask)
removeItem.addEventListener("click", removeTask)
inspirationButton.addEventListener("click", getInspiration)