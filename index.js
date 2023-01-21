const bodyParser = require("body-parser")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const inmobiliariasRoutes = require("./routes/inmobiliaria")


const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api",inmobiliariasRoutes)

const port = process.env.PORT||8000;
app.listen (port, ()=> {
    console.log(`server running ${port}`);
})

