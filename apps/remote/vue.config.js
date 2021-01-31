const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  publicPath: "http://localhost:8081",
  devServer: {
    port: 8081
  },
  configureWebpack: {
    plugins: [
      new  ModuleFederationPlugin({
        name: "hello",
        filename: "remoteEntry.js",
        exposes: {
          "./HelloWorld": "./src/components/HelloWorld"
        },
        shared: require("./package.json").dependencies
      })
    ]
  }
}