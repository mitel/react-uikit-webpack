/**
 * Created by mitel on 01/05/15.
 */

import React from 'react';

module.exports = [

    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            var response = reply('GET Hello, world!!!');
            console.log("GET request to /");
            return response;
        }
    },

    {
        method: 'GET',
        path: '/test1',
        handler: function (request, reply) {
            var response = reply(React.renderToString(
                    <div>
                        <header>
                            <h1>Isomorphic App</h1>
                            <p>
                                Check out the page source to see that HTML is being rendered on the
                                server.
                            </p>
                        </header>
                        <div>

                        </div>
                    </div>
                )
            );
            return response;
        }
    }


];