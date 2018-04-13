'use strict';

exports.hellohandler = (event, context, callback) => {

    console.log(JSON.stringify(event));
    console.log(JSON.stringify(context));

    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "my custom header value" },
        body: `Hello world, ${event.username}`,
        //body: users,
    });
};
