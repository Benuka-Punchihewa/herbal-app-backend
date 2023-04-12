const { createProxyMiddleware } = require("http-proxy-middleware");

const authProxyOptions = {
  target: process.env.AUTH_SERVICE_BASE_URL,
  changeOrigin: true,
  logger: console,
};

const userProxyOptions = {
  target: process.env.USER_SERVICE_BASE_URL,
  changeOrigin: true,
  logger: console,
};

const authProxy = createProxyMiddleware(authProxyOptions);
const userProxy = createProxyMiddleware(userProxyOptions);

module.exports = {
  authProxy,
  userProxy,
};
