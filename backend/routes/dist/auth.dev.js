"use strict";

var express = require("express");

var router = express.Router();

var User = require("../models/User");

var _require = require("express-validator"),
    body = _require.body,
    validationResult = _require.validationResult;

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var fetchuser = require("../middleware/fetchuser");

var JWT_SECRET = "umairisagoodbo$y"; //Route 1: Create a User using: POST "/api/auth/createuser". No login required

router.post("/createuser", [body("email", "Enter a valid email").isEmail(), body("name", "Enter a valid name").isLength({
  min: 3
}), body("password", "password must be atleast 5 characters").isLength({
  min: 5
})], function _callee(req, res) {
  var success, errors, user, salt, secPass, data, authToken;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          success = false;
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: success,
            errors: errors.array()
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 6:
          user = _context.sent;
          _context.prev = 7;
          _context.next = 10;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 10:
          salt = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

        case 13:
          secPass = _context.sent;

          if (!user) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: success,
            error: "sorry a user with this email already exists"
          }));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
          }));

        case 18:
          user = _context.sent;
          // to give user a response an id to verify it later
          data = {
            user: {
              id: user.id
            }
          };
          authToken = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({
            success: success,
            authToken: authToken
          });
          _context.next = 29;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](7);
          console.error(_context.t0);
          res.status(500).send("Internal Server Error");

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 25]]);
}); //Route 2: Authenticate a User using: POST "/api/auth/login". No login required

router.post("/login", [body("email", "Enter a valid email").isEmail(), body("password", "Password cannot be blank").exists()], function _callee2(req, res) {
  var success, errors, _req$body, email, password, user, passwordCompare, data, authToken;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          success = false;
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 4:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 8:
          user = _context2.sent;

          if (!user) {
            success = false;
            res.status(400).json({
              error: "please login with correct credentials"
            });
          }

          _context2.next = 12;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 12:
          passwordCompare = _context2.sent;

          if (!passwordCompare) {
            res.status(400).json({
              error: "please login with correct credentials"
            });
          }

          data = {
            user: {
              id: user.id
            }
          };
          authToken = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({
            success: success,
            authToken: authToken
          });
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](5);
          console.error(_context2.t0);
          res.status(500).send("Internal Server Error");

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 20]]);
}); //Route 3: Get logged in user details using: POST "/api/auth/getuser". login required

router.post("/getuser", fetchuser, function _callee3(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userId = req.user.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findById(userId).select("-password"));

        case 4:
          user = _context3.sent;
          res.send(user);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).send("Internal Server Error");

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;