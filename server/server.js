const express = require('express');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
// const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride());
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
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}

app.options('*', cors(corsOptions));
app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin. Gilbert rockz' });
});

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
console.log('select * from Questions....')
    db.query('select * from Questions;', function (err2, result, field) {
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


//HUI FANG PART"
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

//SIN SIAN PART
//Get tab2
app.route('/getUser', cors(corsOptions))
.get(function (request, response) {
    db.query('SELECT * FROM Users ;',
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

// UPDATE USER DETAILS
app.route('/editUser', cors(corsOptions)).post(function (request, response) {
    var id = request.body.id
    var name = request.body.name;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var education = request.body.education;
    var image = request.body.image;

    // edit Item
    db.query('UPDATE users set name=?, mobile=?,email=?,education=?,image=? where id =? ;',
    [name, mobile, email, education, image, id],
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

//LIQI PART
app.route('/addCourse', cors(corsOptions))
.post(function (request, response) {
    var CourseId = request.body.CourseId;
    var CourseTitle = request.body.CourseTitle;
    var Institution = request.body.Institution;
    var ImgUrl = request.body.ImgUrl;
    var Sector = request.body.Sector;
    var JobRole = request.body.JobRole;
    var ApplicationStatus = request.body.ApplicationStatus;
    var LastModified = request.body.LastModified;
    var Overview = request.body.Overview;
    var EntryRequirement = request.body.EntryRequirement;
    var CourseFee = request.body.CourseFee;
    var WspCompanyId = request.body.WspCompanyId;
    var WspContactId = request.body.WspContactId;
    var icon = "bookmark-outline";
    // Insert Item
    db.query('INSERT Into course (courseId,courseTitle,imgUrl,sector, institution,jobRole,applicationStatus,lastModified, overview,entryRequirement,courseFee,wspCompanyId, wspCompanyId, icon) values(?,?,?,?,?,?,?,?,?,?,?.?,?,?); ',
        [CourseId,CourseTitle,Institution,ImgUrl,Sector,JobRole,ApplicationStatus,LastModified,Overview,EntryRequirement,CourseFee, WspCompanyId,WspContactId,icon], function
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



// app.route('/getListItem', cors(corsOptions))
//     .get(function (request, response) {
//         db.query('SELECT * FROM products ;',
//             function (error, result, fields) {
//                 if (error) {
//                     console.log('Error message: ', error);
//                     throw error;
//                 };
//                 console.log(result)
//                 response.send(result);
//                 //sent all item details
//             });
//     });

app.route('/getListCourse', cors(corsOptions))
.get(function (request, response) {
    db.query('SELECT * FROM course;',
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

// app.route('/getItem', cors(corsOptions))
//     .post(function (request, response) {
//         var ProdId = request.body.ProdId
//         // get Item
//         db.query('SELECT * FROM products WHERE prodId = ? ;', [ProdId],
//             function (error, result, fields) {
//                 if (!error) {
//                     if (result.length > 0) {
//                         response.send(result);
//                     } else {
//                         response.send(false);
//                     }
//                 } else {
//                     console.log(error);
//                     throw error
//                 }
//             })
//     });

app.route('/getCourse', cors(corsOptions))
.post(function (request, response) {
    var CourseId = request.body.CourseId
    // get Item
    db.query('SELECT * FROM course WHERE courseId = ? ;', [CourseId],
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
});

app.route('/editCourse', cors(corsOptions))
.post(function (request, response) {

    var CourseId = request.body.CourseId;
    var CourseTitle = request.body.CourseTitle;
    var Institution = request.body.Institution;
    var ImgUrl = request.body.ImgUrl;
    var Sector = request.body.Sector;
    var JobRole = request.body.JobRole;
    var ApplicationStatus = request.body.ApplicationStatus;
    var LastModified = request.body.LastModified;
    var Overview = request.body.Overview;
    var EntryRequirement = request.body.EntryRequirement;
    var CourseFee = request.body.CourseFee;
    var WspCompanyId = request.body.WspCompanyId;
    var WspContactId = request.body.WspContactId;
    // edit Item
    db.query('UPDATE course set courseTitle=?,imgUrl=?,sector =?, institution =?,jobRole=?, applicationStatus=?,lastModified =?, overview = ?,entryRequirement =?,courseFee=?, =?,wspCompanyId=?,wspContactId =? where courseId =? ; ',
        [CourseId, CourseTitle,Institution,ImgUrl,Sector,JobRole,ApplicationStatus,LastModified,Overview,EntryRequirement,CourseFee,WspCompanyId,WspContactId],
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

app.route('/deleteCourse', cors(corsOptions))
.post(function (request, response) {
    var CourseId = request.body.CourseId;
    db.query('DELETE FROM course where courseId = ? ;',
        [CourseId],
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

