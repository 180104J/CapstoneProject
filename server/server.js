const express = require('express');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser');
var methodOvereide = require('method-override');
var cors = require('cors');
// const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors());
app.use(bodyParser.json());
app.use(methodOvereide());
const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } 
        else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
})

const db = mysql.createPool({
    connectionLimit: 100,
    host: 'a2nlmysql19plsk.secureserver.net',
    user: 'Eximius',
    password: 'ms@ITJ153',
    database: 'Eximius'
});


db.getConnection((err1) => {
    console.log('Connecting mySQL....')
    if (err1) {
        throw err1;
    }
    console.log('Mysql connected....')
    db.query('select * from course;', function (err2, result, field) {
        if (!err2) {
            console.log(result);
        }
        else {
            console.log(err2)
        }
    });
});

// Basic things to include
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log("listening to Port", app.get("port"));
});

//Get tab2
app.route('/getCourses', cors(corsOptions))
.get(function (request, response) {
    db.query('SELECT * FROM course ;',
    function (error, result, fields) {
        if (error) {
            console.log('Error message: ', error);
            throw error;
        };
        console.log(result)
        response.send(result);
        //sent all item details
    })
})

//SIN SIAN PART
//Get tab2
app.route('/getUser', cors(corsOptions))
.get(function (request, response) {
    db.query('SELECT * FROM user ;',
    function (error, result, fields) {
        if (error) {
            console.log('Error message: ', error);
            throw error;
        };
        console.log(result)
        response.send(result);
        //sent all item details
    })
})

/* UPDATE USER DETAILS
app.route('/getItem', cors(corsOptions)).post(function (request, response) {
    var ProdId = request.body.ProdID
    // get Item
    db.query('SELECT * FROM User WHERE userId = ? ;', [UserId],
    function (error, result, fields) {
        if (!error) {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        } else {
            console.log(error);
            throw error
        }
    })
})
app.route('/editUser', cors(corsOptions)).post(function (request, response) {
    var userId = request.body.userId
    var name = request.body.name;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var education = request.body.education;
    var userImage = request.body.userImage;

    // edit Item
    db.query('UPDATE users set name=?, mobile=?,email=?,education=?,userImage=? where userId =? ;',
    [name, mobile, email, education, userImage, userId],
    function (error, result, fields) {
        if (!error) {
            console.log(result);
            response.send(true)
        } else {
            console.log(error);
            response.send(false)
        }
    })
})

*/


//HUI FANG PART 
app.route('/add-question', cors(corsOptions))
    .post(function (request, response) {
        var questionID = request.body.questionID;
        var creationDate = request.body.creationDate;
        var modifiedDate = request.body.modifiedDate;
        var userID = request.body.userID;
        var userName = request.body.userName;
        var questionDetails = request.body.questionDetails;
        var referenceID = request.body.referenceID;
        // Insert Item
        db.query('INSERT Into Questions (questionID, creationDate, modifiedDate, userID, userName, questionDetails, referenceID) values(?,?,?,?,?,?,?); ',
            [questionID, creationDate, modifiedDate, userID, userName, questionDetails, referenceID], function
            (error, result, fields) {
            if (!error) {
                console.log(result);
                response.send(true)
            } else {
                console.log(error);
                response.send(false)
            }
        });
    });

    app.route('/getQuestion', cors(corsOptions))
    .get(function (request, response) {
        db.query('SELECT * FROM Questions ;',
            function (error, result, fields) {
                if (error) {
                    console.log('Error message: ', error);
                    throw error;
                };
                console.log(result)
                response.send(result);
                //sent all item details
            });
    });

    app.route('/editQuestions', cors(corsOptions))
    .post(function (request, response) {
        var questionID = request.body.questionID;
        var creationDate = request.body.creationDate;
        var modifiedDate = request.body.modifiedDate;
        var userID = request.body.userID;
        var userName = request.body.userName;
        var questionDetails = request.body.questionDetails;
        var referenceID = request.body.referenceID;
        // edit Item
        db.query('UPDATE Questions set questionDetails=? where questionID =? ; ',
            [questionID, creationDate, modifiedDate, userID, userName, questionDetails, referenceID],
            function (error, result, fields) {
                if (!error) {
                    console.log(result);
                    response.send(true)
                } else {
                    console.log(error);
                    response.send(false)
                }
            })
    });

app.route('/deleteQuestions', cors(corsOptions))
    .post(function (request, response) {
        var questionID = request.body.questionID;
        db.query('DELETE FROM Questions where questionID = ? ;',
            [questionID],
            function (error, result, field) {
                if (!error) {
                    console.log(result);
                    response.send(true)
                } else {
                    console.log(error);
                    response.send(false)
                }
            });
    });