
module.exports = (config, context) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),  
      }
    }
  };
};