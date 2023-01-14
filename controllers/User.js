const User = require("../models/User")
const bcrypt = require("bcrypt")


const get_all_user = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}


const update_user = async (req, res) => {
    try {
        const { password } = req.body
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            ...req.body,
            password: await bcrypt.hash(password, 10)
        }, { new: true })
        return res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const delete_user = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json("User deleteddd...")
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    get_all_user,
    update_user,
    delete_user
}