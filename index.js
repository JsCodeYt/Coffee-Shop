const express = require("express")
const cors = require('cors')
const dotenv = require("dotenv")
const morgan = require("morgan")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const authRouter = require("./router/Auth")
const userRouter = require("./router/User")
const productRouter = require("./router/Product.js")

const app = express()

dotenv.config()
const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
            .then(() => {
                console.log('db active')
            })
    } catch (error) {
        console.log(error)
    }
}

// multer 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload")
    },
    filename: (req, file, cb) => {
        const nowDate = Date.now()
        cb(null, nowDate + req.body.name + path.extname(file.originalname))
    }
})

const upload = multer({ storage })


// routes
app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(morgan("tiny"))
app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/product", productRouter)

// public routes
app.post("/", upload.single("file"), (req, res) => { res.status(201).json("file upload") })
app.get("/", (req, res) => { res.send("ok") })



app.listen(process.env.PORT, () => {
    connectToMongo()
    console.log('Connect to backend')
})