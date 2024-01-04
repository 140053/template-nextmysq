/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {        
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              pathname: '**',
            },
          ],
    },webpack: (config) => {
      
      config.module.rules.push({
        test: /\.node/, 
        use: "node-loader",
      });
      /*
      config.module.rules.unshift({
        test: /pdf\.worker\.(min\.)?js/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[contenthash].[ext]",
              publicPath: "_next/static/worker",
              outputPath: "static/worker"
            }
          }
        ]
      });
      */
      return config;
    },
    
}

module.exports = nextConfig
