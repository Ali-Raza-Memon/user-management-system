const app = require('./app');
const dot = require("dotenv");
const connectDatabase = require("./config/database");


//Config
dot.config({path:"backend/config/config.env"})

//Connecting to database
connectDatabase()



const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});


