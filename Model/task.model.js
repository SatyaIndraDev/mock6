const mongoose = require('mongoose')

const taskSchema=mongoose.Schema({
title:String,
description:String,
status:{type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},

subtasks:[{ type: "ObjectId", ref: 'Subtask'}]


},{versionKey:false})

const taskModel=mongoose.model("task",taskSchema)

module.exports={
   taskModel
}
