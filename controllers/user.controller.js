const userModel = require("../models/user.model");

const registerUser = (req, res) => {
    let formData = new userModel(req.body);

    userModel.findOne({ email: req.body.email }, (err, result) => {
        if (result) {
            res.send({ message: `${result.email} already exists` })
        } else {
            formData.save((err) => {
                if (err) {
                    res.send({ message: err, status: false });
                } else {
                    res.send({ message: "Registration successful", status: true })
                }
            });
        }
    })
};

const logIn = (req, res) => {
    let { email, password } = req.body;
    userModel.findOne({ email: email, password: password }, (err, result) => {
        console.log(result, err)
        if (result) {
            if (email === result.email && password === result.password) {
                res.send({ message: "Login successfully", status: true, result })
            }
        } else {
            if (err == null) {
                res.send({ message: "Invalid Details!!!", status: false })
            }
        }
    });
}

const getProfile = (req, res) => {
    let { email } = req.body;
    userModel.findOne( { email: email }, (err, result) => {
        if (result) {
            res.send({ message: "Profile ready", result })
        } else (
            console.log(err)
        )
    });
}




module.exports = { registerUser, logIn, getProfile }