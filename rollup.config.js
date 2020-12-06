require("dotenv").config();

import path from "path";

import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";

import config from "sapper/config/rollup.js";
import svelte from "rollup-plugin-svelte";
import svelteSVG from "rollup-plugin-svelte-svg";

import pkg from "./package.json";

const svelteConfig = require("./svelte.config");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const aliases = alias({
  entries: [{ find: "@", replacement: path.resolve(process.cwd(), "./src") }],
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    preserveEntrySignatures: false,
    plugins: [
      json(),
      replace({
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelteSVG({ dev }),
      svelte({
        ...svelteConfig,
        dev,
        hydratable: true,
        emitCss: true,
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
        extensions: [".mjs", ".js", ".json", ".node", ".svelte"],
      }),
      aliases,
      commonjs(),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          babelHelpers: "runtime",
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      json(),
      replace({
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelteSVG({ generate: "ssr", dev }),
      svelte({
        ...svelteConfig,
        generate: "ssr",
        dev,
      }),
      resolve({
        dedupe: ["svelte"],
        extensions: [".mjs", ".js", ".json", ".node", ".svelte"],
      }),
      aliases,
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      json(),
      resolve({
        extensions: [".mjs", ".js", ".json", ".node", ".svelte"],
      }),
      aliases,
      replace({
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
};
