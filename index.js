const express=require('express')

const {connection} =require("./db")

const cors=require('cors')
const { boardRouter } = require('./Routes/board.route')
const { taskRouter } = require('./Routes/task.route')
require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors())

app.use("/board",boardRouter)

app.use("/task",taskRouter)



app.listen(process.env.PORT,async()=>{
try{
    await connection
    console.log(`running db At ${process.env.PORT}` )
}
catch(err){
    console.log(err)
}
})

