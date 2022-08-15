const pool = require('../../config/db');
const mysql = require("mysql");
const bcrypt = require("bcrypt");

module.exports = {
    getUserProfile: (data, callback) => {
        const email_ = data.body.email;
        const password_ = data.body.password
        const hashedPassword =  bcrypt.hash(password_, 10);
        console.log("Email is ", email_);
        console.log("Password is ", hashedPassword);

        let selectQuery = 'Select * from ?? where ??=? and ??=?';
        let query = mysql.format(selectQuery, ["users", "email","email_","password","hashedPassword"])

        pool.query(query,
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