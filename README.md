# Steps to enable formatting ts,js,jsx,tsx etc on manual save as well as autosave with eslint, typescript and prettier which formats document on manual save as well as autosave

Follow these steps to set up your environment for working with the project.

### 1. Install VS Code Extensions

To enhance your development experience, install the following extensions in Visual Studio Code:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Format on auto save](https://marketplace.visualstudio.com/items?itemName=BdSoftware.format-on-auto-save)

### 2. Configure VS Code for Auto Formatting

You can configure Visual Studio Code for auto-formatting by following these steps:
 
 Open your command palette (Command + Shift + P) or Ctrl+Shift+P.
 
 Look for "Preferences: Open User Settings (JSON)" and paste the following key value pairs at the end:

```javascript
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",

```

### 3. Install dependencies in the source folder
```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier prettier typescript
```
 
### 4. Create new file `.eslintrc` with the below config
``` javascript
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],

  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"]
  },

  "env": {
    "browser": false,
    "es2021": true
  }
}
```

### 5. Create new file `.prettierrc` with the below config
``` javascript
{
    "singleQuote": true,
    "tabWidth": 4,
    "semi": true,
    "trailingComma": "all",
    "useTabs": false
}
```
### 6. Restart vscode to load changes
