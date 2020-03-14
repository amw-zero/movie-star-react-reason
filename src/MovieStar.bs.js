'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var TopMovies$ReasonReactExamples = require("./TopMovies.bs.js");
var FavoriteMovies$ReasonReactExamples = require("./FavoriteMovies.bs.js");

function MovieStar(Props) {
  var initialState_movies = [];
  var initialState = {
    movies: initialState_movies,
    favoritedMovies: /* [] */0
  };
  var match = React.useState((function () {
          return initialState;
        }));
  var setState = match[1];
  var state = match[0];
  var apply = Curry.__1(setState);
  return React.createElement(React.Fragment, undefined, React.createElement(TopMovies$ReasonReactExamples.make, {
                  state: state,
                  apply: apply
                }), React.createElement(FavoriteMovies$ReasonReactExamples.make, {
                  state: state,
                  apply: apply
                }));
}

var make = MovieStar;

exports.make = make;
/* react Not a pure module */
