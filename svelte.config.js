const preprocess = require("svelte-preprocess");
module.exports = {
  preprocess: preprocess({
    scss: {
      includePaths: ["src/styles"],
    },
    postcss: {
      plugins: [require("autoprefixer")],
    },

    preserve: ["ld+json"],
  }),
};
