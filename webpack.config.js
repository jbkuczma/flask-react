module.exports = {
    entry: [
        './app/frontend/app.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app/backend/static'
    }
}