'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var MovieStarReason = require("movie-star-reason/src/MovieStarReason.bs.js");

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
  var _movieElement = function (movie, string) {
    return React.createElement("p", {
                onClick: (function (param) {
                    return Curry._1(setState, (function (state) {
                                  return MovieStarReason.Command.toggleFavoriteMovie(state, movie);
                                }));
                  })
              }, string);
  };
  return React.createElement(React.Fragment, undefined, $$Array.map((function (param) {
                    var state$1 = state;
                    var movie = param;
                    var match = List.filter((function (m) {
                              return Caml_obj.caml_equal(m, movie);
                            }))(state$1.favoritedMovies);
                    if (match && !match[1]) {
                      var movie$1 = match[0];
                      return _movieElement(movie$1, movie$1.title + " *");
                    } else {
                      return _movieElement(movie, movie.title);
                    }
                  }), state.movies), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setState, (function (state) {
                                    return MovieStarReason.Command.viewTopMovies(state);
                                  }));
                    })
                }, "view top movies"), React.createElement("p", undefined, "test"));
}

var make = MovieStar;

exports.make = make;
/* react Not a pure module */
