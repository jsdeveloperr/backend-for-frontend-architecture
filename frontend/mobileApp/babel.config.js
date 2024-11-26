module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@/': './app',
          '@/Services': './app/Services',
          '@/Screens': './app/Screens',
          '@/Context': './app/Context',
          '@/Components': './app/Components',
          '@/Types': './app/Types',
          '@/Utils': './app/Utils',
          '@/Layout': './app/Layout',
        },
      },
    ],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    'react-native-reanimated/plugin',
  ],
};
