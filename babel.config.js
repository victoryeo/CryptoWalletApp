module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: 'src',
          },
          {
            rootPathSuffix: './src/components',
            rootPathPrefix: 'components',
          },
          {
            rootPathSuffix: './src/utils',
            rootPathPrefix: 'utils',
          },
          {
            rootPathSuffix: './src/assets',
            rootPathPrefix: 'assets',
          },
          {
            rootPathSuffix: './src/pages',
            rootPathPrefix: 'pages',
          },
          {
            rootPathSuffix: './src/redux',
            rootPathPrefix: '@crypto-redux',
          },
        ],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ]
  ],
};
