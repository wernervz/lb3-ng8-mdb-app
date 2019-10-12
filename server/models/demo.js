'use strict';

module.exports = function(Demo) {

    Demo.echo = function (msg, cb) {
        cb(null, { 'echo': msg })
    }

    Demo.remoteMethod('echo', {
        'accepts': [
            {
                'arg': 'msg',
                'type': 'string',
                'required': true
            }
        ],
        'returns': {
            'arg': 'body',
            'type': 'object',
            'root': true
        },
        'http': {
            'verb': 'get'
        }
    })
};
