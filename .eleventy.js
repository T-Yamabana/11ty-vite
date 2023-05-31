const httpProxy = require("http-proxy");
const prettier = require('prettier');

module.exports = function(eleventyConfig) {

  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    callbacks: {
      ready: function(_err, browserSync) {
        const proxy = httpProxy.createProxyServer();
        browserSync.addMiddleware('*', (req, res) => {
          proxy.web(req, res, { target: 'http://localhost:5173' });
        });
      },
    },
  });

  eleventyConfig.addTransform('formatHTML', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return prettier.format(content, {
        parser: 'html',
        printWidth: 1000,
      });
    }
    return content;
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