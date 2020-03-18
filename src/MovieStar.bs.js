'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var MovieStarReason = require("movie-star-reason/src/MovieStarReason.bs.js");
var TopMovies$ReasonReactExamples = require("./TopMovies.bs.js");
var FavoriteMovies$ReasonReactExamples = require("./FavoriteMovies.bs.js");

function MovieStar(Props) {
  var match = React.useState((function () {
          return MovieStarReason.defaultState;
        }));
  var setState = match[1];
  var state = match[0];
  var apply = Curry.__1(setState);
  var observer = function (s) {
    return Curry._1(setState, (function (param) {
                  return s;
                }));
  };
  var server = function (f) {
    return Curry._1(f, [
                {
                  title: "Wayne's World"
                },
                {
                  title: "Wayne's World 2"
                },
                {
                  title: "Unabomber"
                },
                {
                  title: "Cat in the Hat"
                },
                {
                  title: "Sharkboy and Lavagirl"
                }
              ]);
  };
  return React.createElement(React.Fragment, undefined, React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setState, MovieStarReason.Command.clearFavoriteMovies);
                    })
                }, "Clear Favorites"), React.createElement("button", {
                  onClick: (function (param) {
                      return MovieStarReason.Command.asyncTopMovies(state, server, observer);
                    })
                }, "View Top Movies"), React.createElement(TopMovies$ReasonReactExamples.make, {
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
