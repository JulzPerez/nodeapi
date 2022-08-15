const pool = require('../../config/db');
const mysql = require("mysql");


module.exports = {

    verifyUser: (email, callback) => {
        let selectQuery = 'Select password from ?? where ??=? limit 1';
        let query = mysql.format(selectQuery, ["users", "email",email]);
        //console.log(query);

        pool.query(query,
            (error,result,fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null,result[0])
            }
        )

    },

    
    getUsers: callback => { //(get /)
        pool.query('Select * from users', [], 
        (error,results,fields) => {
            if(error){
                return callback(error);
            }
            return callback(null,results)
        })
    },

    addNewUser: async (data, callback) => { //add new user
        console.log(data);
        const password_ = data.body.password;
        const hashedPassword = await bcrypt.hash(password_, 10);
        let insertQuery = 'Insert into users(first_name, last_name, email, user_type, password) values(?,?,?,?,?) ';
        let query = mysql.format(insertQuery, [data.body.first_name, data.body.last_name, data.body.email, data.body.user_type, hashedPassword]);
        console.log(query);
        
        pool.query(query,
            (error,results,fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null)

            }
        )
    }
}