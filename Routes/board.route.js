

const express=require("express")
const { boardModel } = require("../Model/board.model")

const boardRouter=express.Router()

boardRouter.get("/",async(req,res)=>{

try{
const board= await boardModel.find()
if(board){
    res.status(200).json({board})
}
else{
    res.status(400).json({error:err})
}
}
catch(err){

}
})


boardRouter.post("/add",async(req,res)=>{

    try{
   const board=new boardModel(req.body)
await board.save()
res.json({msg:"created"})
    
    }
    catch(err){
    res,json(err)
    }
    })

    module.exports={
        boardRouter
    }