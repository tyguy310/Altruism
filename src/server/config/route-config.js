(function (routeConfig) {
  'use strict';

  routeConfig.init = function (app) {
    // *** routes *** //
    const routes = require('../routes/index');
    const register = require('../routes/register');
    const login = require('../routes/login');
    const logout = require('../routes/logout');
    const helps = require('../routes/helps');
    const profile = require('../routes/profile');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/register', register);
    app.use('/login', login);
    app.use('/help', helps);
    app.use('/logout', logout);
    app.use('/profile', profile);
  };
})(module.exports);
