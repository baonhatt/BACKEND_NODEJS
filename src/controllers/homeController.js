const connection = require('../config/database')


const getHomePage = (req, res) => {
    const user = []
    connection.query(
        'SELECT * FROM `Students`',
        function (err, results, fields) {
            user = results
            console.log(results); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
           res.send(JSON.stringify(user))

        }
    );

}