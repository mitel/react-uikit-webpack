/**
 * Created by mitel on 01/05/15.
 */


// de vazut cum pot utiliza connection.settings.plugins sau connection.plugins
module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'A hard to guess string',
    MONGO_URI: process.env.MONGO_URI || 'localhost',
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '8f7be648904f3c0aa4bf2acc627a82c5',
    FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || 'Foursquare Client Secret',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'Google Client Secret',
    GITHUB_SECRET: process.env.GITHUB_SECRET || 'GitHub Client Secret',
    LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'LinkedIn Client Secret',
    WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || 'Windows Live Secret',
    TWITTER_KEY: process.env.TWITTER_KEY || 'Twitter Consumer Key',
    TWITTER_SECRET: process.env.TWITTER_SECRET || 'Twitter Consumer Secret',
    TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'Twitter Callback Url',
    YAHOO_SECRET: process.env.YAHOO_SECRET || 'Yahoo Client Secret',

    ORIENTDB_HOST: process.env.ORIENTDB_HOST || 'localhost',
    ORIENTDB_PORT: process.env.ORIENTDB_PORT || 2424,
    ORIENTDB_HTTPPORT: process.env.ORIENTDB_HTTPPORT || 2480,
    ORIENTDB_USERNAME: process.env.ORIENTDB_USERNAME || 'root',
    ORIENTDB_PASSWORD: process.env.ORIENTDB_PASSWORD || 'password'
};

