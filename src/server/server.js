/**
 * Created by mitel on 01/05/15.
 */

var Hapi = require('hapi');
//var Tv = require('tv');
var react_routes = require('routes/testroutes');

var server = new Hapi.Server({
    connections: {
        routes: {
            cors: {
                origin: ['*'],
                credentials: true,
                additionalHeaders: ['X-Requested-With']
            }
            //cors: true
        }
    }
});
server.connection({ port: 8000 });

// append all defined routes into an array passed to server.route()
var routes = Array.prototype.concat.apply([], [
    react_routes
]);
server.route(routes);

// good is a process monitor that listens for one or more 'event types'.
// All of these events, except 'ops', map to a hapi event
// (https://github.com/hapijs/hapi/blob/master/API.md#server-events)
var goodOptions = {
    opsInterval: 10000,
    reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*', request: '*'}
    }, {
        reporter: require('good-file'),
        events: { log: '*', response: '*' },
        config: './log-hapi-server.json'
    }]
};

// TV is a simple web page in which developers can view server logs for their requests.
// Optionally, they can also filter the server logs to just their requests by attaching a
// unique client id to each request. The server will use WebSocket to stream the logs to
// the web application in real-time.
// server.register([Tv, {
server.register([{
    register: require('good'),
    options: goodOptions
}], function (err) {

    /*
     * The if (!module.parent) {…} conditional makes sure that if the script is being
     * required as a module by another script, we don’t start the server. This is done
     * to prevent the server from starting when we’re testing it; with Hapi, we don’t
     * need to have the server listening to test it.
     * */
    //if (!err && !module.parent) {
    if (!err) {
        server.start(function () {
            console.log('hapi.js server running at:', server.info.uri);
        });
    }

});

module.exports = server;