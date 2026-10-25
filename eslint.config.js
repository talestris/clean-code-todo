const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["app.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      sourceType: "script",
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
    },
  },
  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "commonjs",
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
