const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports ={
    name : 'wordrelay-setting',
    mode : 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게 하겠다..?
    resolve: {
        extensions: ['.js', '.jsx']
    },

    /**entry 파일을 읽은 후 modules를 적용한 후 output으로 결과를 빼준다. */
    entry: {
        app: ['./client']
    }, // 입력

    module:{
        rules:[{
            test: /\.jsx?/, // js파일과 jsx파일을 rule을 적용하겠다는 뜻 (정규표현식)
            loader: 'babel-loader', //어떤 rule ? loader에 관한 rule 
            options: {
                presets:[
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['> 1% in KR'],   //browserslist 
                    },
                    debug: true,
                }],
                '@babel/preset-react'
            ],
            plugins:[
                '@babel/plugin-proposal-class-properties',
                'react-refresh/babel',
            ],
            },
        }],
    },

    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'), // __dirname : 현재파일(lecture) 안에 'dist'폴더 위치를 가리킴
        filename: 'app.js',
        publicPath: '/dist'
    }, // 출력
    devServer:{
       devMiddleware: {publicPath: '/dist'}, // webpack이 빌드할 때 생성되는 파일의 경로
       static: {directory: path.resolve(__dirname)}, // 실제로 존재하는 파일의 경로, 파일이 폴더 안에 있으면 (__dirname, "폴더명")을 해주면 된다.
       hot: true
    }
};