module.exports = function(eleventyConfig) {

  eleventyConfig.setServerOptions({
    domDiff: false,
  });

  return {
    templateFormats: ["pug", "html"],
    htmlTemplateEngine: "pug",
    dir: {
      input: "src/pages",
      output: "dist",
    },
  };
};