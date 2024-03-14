module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended",
    ],
    ignorePatterns: ["build", ".eslintrc.js", 'node_modules', 'prettier.config.js', 'webpack.config.js', 'jest.config.cjs', 'babel.config.cjs'],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-hooks", "react", "prettier"],
    rules: {
      "prettier/prettier": ["error"],
      '@typescript-eslint/consistent-type-imports': 'error',
      "react/self-closing-comp": ["error", {
        "component": true,
        "html": true
      }],
      "arrow-body-style": ["error", "as-needed"],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }