const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["index.html", "style.css", "node_modules/", ".github/"],
  },
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
