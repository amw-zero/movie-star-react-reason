'use strict';

var React = require("react");
var TopMovies$ReasonReactExamples = require("./TopMovies.bs.js");
var FavoriteMovies$ReasonReactExamples = require("./FavoriteMovies.bs.js");

function MovieStar(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(TopMovies$ReasonReactExamples.make, { }), React.createElement(FavoriteMovies$ReasonReactExamples.make, { }));
}

var make = MovieStar;

exports.make = make;
/* react Not a pure module */
