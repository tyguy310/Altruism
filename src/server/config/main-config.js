(function (appConfig) {
  'use strict';

  // *** main dependencies *** //
  const express = require('express');
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const nunjucks = require('nunjucks');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;

  // *** view folders *** //
  const viewFolders = [
    path.join(__dirname, '..', 'views')
  ];

  // *** load environment variables *** //
  require('dotenv').config();

  appConfig.init = function (app, express) {
    // *** view engine *** //
    nunjucks.configure(viewFolders, {
      express: app,
      autoescape: true
    });
    app.set('view engine', 'html');

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true
    }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(path.join(__dirname, '..', '..', 'client')));
  };
})(module.exports);
