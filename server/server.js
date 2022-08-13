const express = require('express');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser');
var methodOvereide = require('method-override');
var cors = require('cors');
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
    db.query('select * from UserAccount;', function (err2, result, field) {
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

/*//Get tab2
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
})*/