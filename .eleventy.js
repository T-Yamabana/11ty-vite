const httpProxy = require("http-proxy");

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

  return {
    templateFormats: ["pug", "html"],
    htmlTemplateEngine: "pug",
    dir: {
      input: "src/pages",
      output: "dist",
    },
  };
};