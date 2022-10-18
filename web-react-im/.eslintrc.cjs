// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.css']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-multi-spaces': 1, // 不能使用多余空格
    'react/react-in-jsx-scope': 'off', // react 在 jsx 中可以不声明
    quotes: ['error', 'single'], // 单引号替代双引号
    semi: ['error', 'never'], // 不使用分号
    'react/jsx-indent-props': [2, 2], //验证JSX中的props缩进
    'react/no-deprecated': 1, // 不使用弃用的方法
    'react/self-closing-comp': 1, // jsx 自闭标签位置
    'react/jsx-closing-bracket-location': 1, //在JSX中验证右括号位置
    'react/jsx-indent': [1, 2], // JSX 缩进
  },
}
