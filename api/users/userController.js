const {countUserByEmail, getUsers} = require('./userService');

module.exports = {
    countUser: (req,res) => {
        //const email = req.params.email;
        countUserByEmail(req, (err,results) => {
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
            })
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
            })
        })
    }


}
