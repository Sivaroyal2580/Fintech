module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _navigation: './src/navigation',
          _screens: './src/screens',
          _services: './src/services',
          _theme: './src/theme',
        },
      },
    },
  },
};
