

// /* 
//  * To change this license header, choose License Headers in Project Properties.
//  * To change this template file, choose Tools | Templates
//  * and open the template in the editor.
//  */
require('env2')('.env');  
var orm = require('orm');
const { Pool, Client } = require('pg')

const envKey = key => {
    const env = process.env.DB_CONNECTION || 'postgresql';
    const configuration = {
        mysql: {
            connection: 'mysql',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'fandrianah',
            database: 'etc'
        },
        postgresql: {
            connection: process.env.DB_CONNECTION || 'postgresql',
            host: process.env.DB_HOST || '180.250.242.163',
            port: process.env.DB_PORT || 5432,
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres',
            database: process.env.DB_DATABASE || 'postgres',
            schema: process.env.DB_SCHEMA || 'cellum',
        },
        // These should match environment variables on hosted server
        other: {
            connection: process.env.DB_CONNECTION,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE

        }
    };

    return configuration[env][key];
};



//var db = orm.connect('mysql://root:password@localhost/test');

const connectionString = envKey('connection') + '://' + envKey('username') + ':' + envKey('password') + '@' + envKey('host') + ':' + envKey('port') + '/' + envKey('database') + '';
module.exports = function () {
    var db = orm.connect(connectionString);
   // console.log("masuk connection = "+connectionString);
    db.on('connect', function (err) {
        if (err) {
            return console.error('Connection error: ' + err);
        } else {
            console.log("Connection successfull");
        }
    });
    return db;
};
module.exports.envKey = envKey;


//var conString = "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";

//var client = new Client(connectionString);
//client.connect();
const pool = new Pool({
  connectionString: connectionString,
});
module.exports.manual = pool;