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

// //db conn
// db.getConnection((err1) => {
//     console.log('Connecting mySQL....')
//     if (err1) {
//         throw err1;
//     }
//     console.log('Mysql connected....')
//     db.query('select * from UserAccountBabyG;', function (err2, result, field) {
//         if (!err2) {
//             console.log(result);
//             // {
//             //     res.json({ message: result });
//             // }
//         }
//         else {
//             console.log(err2)
//         }
//     });
// });

db.getConnection((err1) => {
    console.log('Connecting mySQL....')
    if (err1) {   
        throw err1;
    }

    console.log('Mysql connected....')
    console.log('select * from UserAccountBabyG....')
    db.query('select * from UserAccountBabyG;', function (err2, result, field) {
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


// app.route('/signup', cors(corsOptions)).post(function (request, response) {
//     var email = request.body.Email; //this is from signup.page.ts
//     var password = request.body.Password;
//     db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;',
//         [email], function (error, result, fields) {
//             if (!error) {
//                 if (result.length > 0) {
//                     response.send(false)
//                 } else {
//                     //No Hashing

//                     db.query("INSERT INTO UserAccountBabyG (email,password) VALUES(?,?); ",email, password);
//                     // With Hashing
//                     // // Hashing and salting password
//                     // bcrypt.hash(password, saltRounds, function (err, hash) {
//                     //     db.query("INSERT INTO UserAccountBabyG (email,password) VALUES(?,?); ",
//                     //         [email, hash], function (error, result, fields) {
//                     //             if (!error) {
//                     //                 console.log('Row inserted:', result);
//                     //             } else {
//                     //                 console.log(error);
//                     //             }
//                     //             response.send(true);
//                     //         })
//                     // });
//                 }
//             } else {
//                 console.log(error);
//             }
//         });
// });

//Signup Logic - Without hashing
app.route('/signupNoHash', cors(corsOptions)).post(function (request, response) {
    var email = request.body.Email; //this is from signup.page.ts
    var password = request.body.Password;
    db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [email], function (error, result, fields) 
    {
        if (!error) {
            if (result.length > 0) {
                response.send(false)
            } else {
                // Hashing and salting password
                // bcrypt.hash(password, saltRounds, function (err, hash) {
                //  db.query("INSERT INTO UserAccountBabyG (email,password) VALUES(?,?);", [email, hash], function (error, result, fields) {
                //             if (!error) {
                //                 console.log('Row inserted:', result);
                //             } else {
                //                 console.log(error);
                //             }
                //             response.send(true);
                //         })
                // });
                db.query("INSERT INTO UserAccountBabyG (email,password) VALUES(?,?);", [email, password], function (error, result, fields) {
                    if (!error) 
                    {
                        console.log('Row inserted:', result);
                    } else 
                    {
                        console.log(error);
                    }
                    response.send(true);
                })

            }
        } else {
            console.log(error);
        }
    });
});

//Signup Logic
app.route('/signup', cors(corsOptions)).post(function (request, response) {
    var email = request.body.Email; //this is from signup.page.ts
    var password = request.body.Password;
    db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [email], function (error, result, fields) 
    {
        if (!error) {
            if (result.length > 0) {
                response.send(false)
            } else {
                // Hashing and salting password
                bcrypt.hash(password, saltRounds, function (err, hash) {
                 db.query("INSERT INTO UserAccountBabyG (email,password) VALUES(?,?);", [email, hash], function (error, result, fields) {
                            if (!error) {
                                console.log('Row inserted:', result);
                            } else {
                                console.log(error);
                            }
                            response.send(true);
                        })
                });

               
            }
        } else {
            console.log(error);
        }
    });
});


//Login Logic (No Hash)
app.route('/loginNoHash',cors(corsOptions))
    .post(function(request, response) {
        var Email = request.body.Email;
        var Password = request.body.Password;
        // Check account details
        db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [Email], function(error, result, fields){
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }


            if (result.length > 0) {
                if (Password == result[0].password)
                {
                    console.log(result);
                    response.send(result); 
                    
                } else 
                {
                    response.send(null);
                                         
                }

                // Compare the password with hashing and salting
//                 bcrypt.compare(Password, result[0].password,
//  function(err, res) {
//                     if (res == true) {
//                         response.send(result); 
        
//                     } else {
//                         response.send(null);
//                     }


                
                Password.localeCompare(result[0].password,
                        function(err, res) {
                            if (res == true) {
                                response.send(result); 
                
                            } else {
                                response.send(null);
                            }

                        });  
                    } else {
                        response.send(null);
                    }
        } )
    })

//Login Logic
app.route('/login',cors(corsOptions))
    .post(function(request, response) {
        var Email = request.body.Email;
        var Password = request.body.Password;
        // Check account details
        db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [Email], function(error, result, fields){
            
            if (!error) 
            {
                console.log(result);
            } else {
                console.log(error);
            }


            if (result.length > 0) {
               
                //Compare the password with hashing and salting
                bcrypt.compare(Password, result[0].password,
                    function(err, res) {
                        if (res == true) {
                            response.send(result); 
                        } else {
                            //response.send(null);
                            var varTemp;
                            varTemp = Password + " vs " + result[0].password;
                            response.send(varTemp);
                        }
                    }
                )
            }

        } )
    })
// app.route('/login', cors(corsOptions))
//     .post(function (request, response) {
//         var email = request.body.Email;
//         var password = request.body.Password;
//         // Check account details
//         db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [email],
//             function (error, result, fields) {
//                 if (!error) {
//                     console.log(result);
//                 } else {
//                     console.log(error);
//                 }
//                 if (result.length > 0) {
//                     // Compare the password with hashing and salting
//                     bcrypt.compare(password, result[0].password,
//                         function (err, res) {
//                             if (res == true) {
//                                 response.send(result);
//                             } else {
//                                 response.send(null);
//                             }
//                         });
//                 } else {
//                     response.send(null);
//                 }
//             });
//     });


// app.route('/signup', cors(corsOptions)).post(function (request, response) {
//     var email = request.body.Email; //this is from signup.page.ts
//     var password = request.body.Password;
//     db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;',
//         [email], function (error, result, fields) {
//             if (!error) {
//                 if (result.length > 0) {
//                     response.send(false)
//                 } else {
//                     // Hashing and salting password
//                     // bcrypt.hash(password, saltRounds, function (err, hash) {
//                     //     db.query("INSERT INTO UserAccountBabyG (email,password) VALUES(?,?); ",
//                     //         [email, hash], function (error, result, fields) {
//                     //             if (!error) {
//                     //                 console.log('Row inserted:', result);
//                     //             } else {
//                     //                 console.log(error);
//                     //             }
//                     //             response.send(true);
//                     //         })
//                     // });

//                 }
//             } else {
//                 console.log(error);
//             }
//         });
// });

// app.route('/login', cors(corsOptions))
//     .post(function (request, response) {
//         var email = request.body.Email;
//         var password = request.body.Password;
//         // Check account details
//         db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [email],
//             function (error, result, fields) {
//                 if (!error) {
//                     console.log(result);
//                 } else {
//                     console.log(error);
//                 }
//                 if (result.length > 0) {
//                     // Compare the password with hashing and salting
//                     // bcrypt.compare(password, result[0].password,
//                     //     function (err, res) {
//                     //         if (res == true) {
//                     //             response.send(result);
//                     //         } else {
//                     //             response.send(null);
//                     //         }
//                     //     });
//                 } else {
//                     response.send(null);
//                 }
//             });
//     });

app.route('/addItem', cors(corsOptions))
    .post(function (request, response) {
        var ProdName = request.body.ProdName;
        var ProdPrice = request.body.ProdPrice;
        var ProdImage = request.body.ProdImage;
        var ProdCategory = request.body.ProdCategory;
        var ProdVeg = request.body.ProdVeg;
        // Insert Item
        db.query('INSERT Into products (prodName,prodPrice,prodImage,prodCategory, prodVegetarian) values(?,?,?,?,?); ',
            [ProdName, ProdPrice, ProdImage, ProdCategory, ProdVeg], function
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

app.route('/getListItem', cors(corsOptions))
    .get(function (request, response) {
        db.query('SELECT * FROM products ;',
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

app.route('/getItem', cors(corsOptions))
    .post(function (request, response) {
        var ProdId = request.body.ProdId
        // get Item
        db.query('SELECT * FROM products WHERE prodId = ? ;', [ProdId],
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

app.route('/editItem', cors(corsOptions))
    .post(function (request, response) {
        var ProdId = request.body.ProdId;
        var ProdName = request.body.ProdName;
        var ProdPrice = request.body.ProdPrice;
        var ProdImage = request.body.ProdImage;
        var ProdCategory = request.body.ProdCategory;
        var ProdVeg = request.body.ProdVeg;
        // edit Item
        db.query('UPDATE products set prodname=?, prodprice=?,prodimage=?,prodcategory =?, prodvegetarian =? where prodId =? ; ',
            [ProdName, ProdPrice, ProdImage, ProdCategory, ProdVeg, ProdId],
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

app.route('/deleteItem', cors(corsOptions))
    .post(function (request, response) {
        var ProdId = request.body.ProdId;
        db.query('DELETE FROM products where prodid = ? ;',
            [ProdId],
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
