const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new  ModuleFederationPlugin({
        name: "container",
        filename: "remoteEntry.js",
        remotes: {
          hello: "hello@http://localhost:8081/remoteEntry.js" 
        },
        shared: require("./package.json").dependencies
      })
    ]
  }
}