const withMDX = require('@next/mdx')()
const svgrPluginConfig = require('./next-conf/svgr.next.config')
const watchPluginConfig = require('./next-conf/watch.next.config')


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '**',
      },
      {
        protocol: "http",
        hostname: "localhost",
      }
    ],    
 },
    // https://stackoverflow.com/questions/72621835/how-to-fix-you-may-need-an-appropriate-loader-to-handle-this-file-type-current
  transpilePackages: [
    '@hanzo/ui', 
    '@hanzo/auth', 
    '@hanzo/commerce', 
    '@hanzo/brand',
    '@luxfi/data'
  ],
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    let conf = svgrPluginConfig(config)
    //conf =  watchPluginConfig(conf) 
    return conf
  }
}

module.exports = withMDX(nextConfig)
