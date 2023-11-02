const mongoose = require('mongoose')

const boardSchema=mongoose.Schema({
name:String,

tasks:Array




},{versionKey:false})

const boardModel=mongoose.model("board",boardSchema)

module.exports={
    boardModel
}


// "name": "Todo",
//       "tasks": [
//         {
//           "title": "Build UI for onboarding flow",
//           "description": "",
//           "status": "Todo",
//           "subtasks": [
//             {
//               "title": "Sign up page",
//               "isCompleted": true
//             },
//             {
//               "title": "Sign in page",
//               "isCompleted": false
//             },
//             {
//               "title": "Welcome page",
//               "isCompleted": false
//             }