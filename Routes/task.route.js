

const express=require("express")

const {taskModel} =require("../Model/task.model")

const taskRouter=express.Router()

taskRouter.get("/",async(req,res)=>{

try{
const task= await taskModel.find()
if(task){
    res.status(200).json({task})
}
else{
    res.status(400).json({error:err})
}
}
catch(err){

}
})


taskRouter.post("/add",async(req,res)=>{

    try{
   const task=new taskModel(req.body)
await task.save()
res.json({msg:"created"})
    
    }
    catch(err){
    res,json(err)
    }
    })

    module.exports={
        taskRouter
    }