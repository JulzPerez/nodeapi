const {getUsers, addNewUser, verifyUser} = require('./userService');
const bcrypt = require("bcrypt");

module.exports = {

    verifyUser: (req, res) => {
        const email = req.body.email;
        const plaintextPassword = req.body.password;
        let isValid = false;

        verifyUser(email, async (err, result) => {
            if(err){
                return res.status(500).json({
                    success: 0,
                    message: "Something wrong with the database!"
                });
            }
            if(!result){
                return res.status(200).json({
                    success: 0,
                    message: "Email does not exist in our record!"
                });
            }

            //console.log(result['password'][0]);
                isValid = await bcrypt.compare(plaintextPassword, result['password']);

                if(isValid){
                    return res.status(200).json({
                        success: 1,
                        verifiedUser: true,
                        message: "User is verified!",
                        
                    });
                }
                else{
                    return res.status(200).json({
                        success: 1,
                        verifiedUser: false,
                        message: "Incorrect password!",
                       
                    });
                }
            

            
        })
    },



    getUsers: (req, res) => {
        getUsers((err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error!"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    addNewUser: (req, res) => {
        addNewUser(req, (err) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database Connection Error!"
                });
            }
            return res.status(200).json({
                success: 1,
            });
        })
    }


}
