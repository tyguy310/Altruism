(function (routeConfig) {
  'use strict';

  routeConfig.init = function (app) {
    // *** routes *** //
    const routes = require('../routes/index');
    const register = require('../routes/register');
    const login = require('../routes/login');
    const logout = require('../routes/logout');
    // *** register routes *** //
    app.use('/', routes);
    app.use('/register', register);
    app.use('/login', login);
    app.use('/logout', logout);
  };
})(module.exports);
