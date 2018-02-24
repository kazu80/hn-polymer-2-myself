const path = 'https://localhost';
module.exports = {
    staticFileGlobs : [
        '/index.html',
        '/manifest.json',
        '/node_modules/@webcomponents/webcomponentsjs/webcomponents*.js',
        '/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'
    ],
    runtimeCaching  : [
        {
            urlPattern: new RegExp (`${path}/(news|newest|ask|show|jobs)`),
            handler   : 'networkFirst',
            options   : {
                cache: {
                    maxEntries: 30,
                    name      : 'articles-cache'
                }
            }
        }, {
            urlPattern: new RegExp (`${path}/item/`),
            handler   : 'networkFirst',
            options   : {
                cache: {
                    maxEntries: 30,
                    name      : 'comments-cache'
                }
            }
        }, {
            urlPattern: new RegExp (`${path}/user/`),
            handler   : 'networkFirst',
            options   : {
                cache: {
                    maxEntries: 30,
                    name      : 'user-cache'
                }
            }
        }
    ],
    navigateFallback: 'index.html',
};