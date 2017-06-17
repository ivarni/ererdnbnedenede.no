const getConfig = require('hjs-webpack');

const config = getConfig({
    in: 'src/app.js',
    out: 'public',
    html: (context) =>
        `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Er er DNB nede nede?</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel=stylesheet type="text/css" href="${context.css}">
            </head>
            <body>
                <script src="${context.main}"></script>
            </body>
            </html>
        `,
    clearBeforeBuild: true
});

module.exports = config;
