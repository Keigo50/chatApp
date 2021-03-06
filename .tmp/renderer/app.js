"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouter = require("react-router");

var _Login = require("./Login");

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require("./Signup");

var _Signup2 = _interopRequireDefault(_Signup);

var _Rooms = require("./Rooms");

var _Rooms2 = _interopRequireDefault(_Rooms);

var _Room = require("./Room");

var _Room2 = _interopRequireDefault(_Room);

var _firebaseBrowser = require("firebase/firebase-browser");

var _firebaseBrowser2 = _interopRequireDefault(_firebaseBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Firebaseの初期化
var config = {
  apiKey: "AIzaSyCKKqJlw383LQNzVFoJX4gqvRv96_AjkEk",
  authDomain: "electron-chat-dc68b.firebaseapp.com",
  databaseURL: "https://electron-chat-dc68b.firebaseio.com",
  projectId: "electron-chat-dc68b",
  storageBucket: "electron-chat-dc68b.appspot.com",
  messagingSenderId: "114185807637"
};
_firebaseBrowser2.default.initializeApp(config);
// Routingの定義
var appRouting = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: "/" },
    _react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: "signup", component: _Signup2.default }),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: "rooms", component: _Rooms2.default },
      _react2.default.createElement(_reactRouter.Route, { path: ":roomId", component: _Room2.default })
    )
  )
);

// Routingの初期化
if (!location.hash.length) {
  location.hash = "#/login";
}

// Applicationをrendering
(0, _reactDom.render)(appRouting, document.getElementById("app"));