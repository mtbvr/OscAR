import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended, // base ESLint recommended rules
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: pluginReact, // plugin importé et nommé
    },
    rules: {
      // tes règles personnalisées ici
    },
  },
  pluginReact.configs.flat.recommended, // config recommandée du plugin React
]);
