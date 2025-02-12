const taskController = {}

taskController.createTask = async(req,res) =>{
    try{
        const {task,isComplete} = req.body
        const newTask = new Task({task,isComplete})
        await newTask.save()
        return res.status(200).json({status: "ok",data:newTask})

    }catch(error){
        res.status(400).json({status: "fail",error})
    }
}

module.exports = taskController