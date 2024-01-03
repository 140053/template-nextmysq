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
      return config;
    },
    
}

module.exports = nextConfig
