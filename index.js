const express = require("express");
const connectDatabase = require("./db/connectDatabase");

const authRouter = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

connectDatabase()
.then(()=>{
    app.listen(3000, ()=>{
        console.log("Server listinging to on 3000")
    })
})