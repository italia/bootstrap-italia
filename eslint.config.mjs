import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/*.min.js", "**/*.d.ts", "**/vendor/*.js", "**/util/youtube-video.js"],
}, ...compat.extends("eslint:recommended", "prettier"), {
    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            $: true,
            jQuery: true,
            bootstrap: true,
            isIe: true,
            define: true,
            require: true,
            options: true,
            createjs: true,
            anchors: true,
            ClipboardJS: true,
            tsParticles: true,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "prettier/prettier": ["error"],
    },
}];