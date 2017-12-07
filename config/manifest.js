require('env2')('.env');  

const envKey = key => {
    const env = process.env.NODE_ENV || 'development';

    const configuration = {
        development: {
            host: process.env.HOST || '0.0.0.0',
            port: process.env.PORT || 10200
        },
        uat: {
            host: '0.0.0.0',
            port: 10100
        },
        // These should match environment variables on hosted server
        production: {
            host: process.env.HOST,
            port: process.env.PORT
        }
    };

    return configuration[env][key];
};

var optionsSess = {
//    storeBlank: false,
    cookieOptions: {
        password: 'passwordmustbesomewhatlongerthanitis', // Required
//        password: 'the-password-must-be-at-least-32-characters-long',
        isSecure: false
    }
};

const manifest = {
    connections: [
        {
            host: envKey('host'),
            port: envKey('port'),
            routes: {
                cors: true
            },
            router: {
                stripTrailingSlash: true
            }
        }
    ]
    // registrations: [
    //     {
    //         plugin: 'hapi-auth-jwt2'
    //     },
    //     {
    //         plugin:
    //                 {
    //                     register: 'yar',
    //                     options: optionsSess
    //                 },

    //     },
    //     {
    //         plugin: './auth'
    //     },
    //     {
    //         plugin: './api',
    //         options: {routes: {prefix: '/api/v1'}}
    //     },
    //     {
    //         plugin: {
    //             register: 'good',
    //             options: {
    //                 ops: {interval: 60000},
    //                 reporters: {
    //                     console: [
    //                         {module: 'good-squeeze', name: 'Squeeze', args: [{error: '*'}]}, {module: 'good-console'}, 'stdout'
    //                     ]
    //                 }
    //             }
    //         }
    //     }
    // ]
};

module.exports = manifest;