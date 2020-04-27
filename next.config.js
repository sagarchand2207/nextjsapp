
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules')(['react-owl-carousel2']);
const withFonts = require('next-fonts')

module.exports = withCSS(withSass(withFonts(withImages(withTM(
  {
    ...{sassOptions: {
      includePaths: ["absolute/path/a", "absolute/path/b"]
    }},
    cssLoaderOptions: {
      url: false,
      import:true,
    },
      webpack (config,{webpack}) {
          const { module = {} } = config;
          config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
          return {
            ...config,
            module: {
              ...module,
              rules: [
                ...(module.rules || []),
                {
                  test: /\.(zip)$/,
                  loader: 'file-loader'
                },
              ]
            }
          }
        }
  }
)))))
