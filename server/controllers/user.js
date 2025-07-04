import User from "../modules/user.js";


// Post Api
const postUser = async (req, res) => {
    const { name, email, password ,address} = req.body;

    // if (!name || !email || !password || address) {
    //     return res.status(400).send({
    //         success: false,
    //         message: "please fill all the details"
    //     })
    // };
    try {
        
        const newUser = new User({
            name: name,
            email: email,
            password: password,
            address:address,

        });

        const savedUser = await newUser.save();
        res.status(201).send({
            success: true,
            data: savedUser,
            message: "signup successfully !!"
        })
    } catch (e) {
        res.status(500).send({
            success: false,
            message: e.message,
        })
    }

};

// login api
const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send({
                success: false,
                message: "please fill all section"
            })
        }
        const response = await User.findOne({ email: email, password: password });

        
        if (response) {
            res.status(200).send(
                {
                    success: true,
                    data: response,
                    message: "login successfuly!!!"
                }
            )
        } else {
            res.status(500).send({
                success: false,
                message: "please correct email and password"
            })
        }
    } catch (e) {
        res.status(500).send({
            success: false,
            message: e.message
        })
    }

};

// fetch api
const getUser = async (req, res) => {
    try {
        const userData = await User.find();

        res.status(200).send(
            {
                success: true,
                data: userData,
                message: " all User data fetch successfully"
            })
    }
    catch (e) {
        res.status(500).send(
            {
                success: false,
                message: e.message
            }
        )
    }
};


export { postUser, postLogin, getUser };