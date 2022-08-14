const pool = require('../../config/db');

module.exports = {
    countUserByEmail: (data, callback) => {
        const email_ = data.params.email;
        console.log("Email is ", email_);
        pool.query(
            'Select count(email) from users where email=?',
            [
                [email_]
            ],
            (error,results,fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null,results[0])

            }
        )
    },
    getUsers: callback => {
        pool.query('Select * from users', [], 
        (error,results,fields) => {
            if(error){
                return callback(error);
            }
            return callback(null,results)
        })
    }
}