/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "simple-import-sort",
    "typescript-sort-keys",
    "sort-keys-fix",
    "sort-destructure-keys",
    "@typescript-eslint",
  ],
  rules: {
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/prop-types": "off",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    /**
     * https://github.com/mthadley/eslint-plugin-sort-destructure-keys/blob/master/docs/rules/sort-destructure-keys.md
     */
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      {
        caseSensitive: false,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "warn",
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
  },
  overrides: [
    {
      files: ["**/stories.tsx"],
      rules: {
        "react/display-name": "off",
      },
    },
  ],
};
module.exports = config;
