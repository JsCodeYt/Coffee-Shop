const jwt = require("jsonwebtoken")
const user = require("../models/User")
const bcrypt = require("bcrypt")


const register = async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10)
        const newUser = new user({
            ...req.body,
            password,
        })
        const token = jwt.sign({ ...newUser }, "secret")

        const saveUser = await newUser.save()
        res.status(201).json({
            user: {
                ...saveUser._doc,
            },
            token: token
        })
    } catch (error) {
        res.status(500).json(error)
    }
}


const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const find_user = await user.findOne({ username })
        if (find_user) {
            const validate = await bcrypt.compare(password, find_user.password)
            if (validate) {
                const token = jwt.sign({ ...find_user }, "secret")
                return res.status(200).json({
                    user: {
                        ...find_user._doc,
                        token: token
                    }
                })
            } return
        } else return
    } catch (error) {
        res.status(500).json(error)
    }
}

const jwt_get = async (req, res) => {
    try {
        const auth_token = req.headers.authorization
        if (auth_token) {
            const jwt_user = jwt.verify(auth_token, "secret")
            console.log(jwt_user)
            return res.status(200).json(jwt_user._doc || jwt_user)
        } else return res.status(404).json({ message: "Not Found !" })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    register,
    login,
    jwt_get
}