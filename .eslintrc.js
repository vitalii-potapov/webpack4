module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["plugin:vue/recommended", "airbnb-base"],
  "globals": {
    "Vue": "readonly"
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "plugins": ["vue", "html"],
  "rules": {
    "camelcase": "off",
    "import/no-extraneous-dependencies": true,
    "max-len": [2, 120],
    "no-alert": "off",
    "no-console": "off",
    "no-param-reassign": ["error", {
      "props": false
    }],
    "object-curly-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/prop-name-casing": "off",
    "vue/singleline-html-element-content-newline": "off"
  }
};