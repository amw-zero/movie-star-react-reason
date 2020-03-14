'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

function favoriteMovieElement(movie) {
  return React.createElement("p", undefined, movie.title);
}

function FavoriteMovies(Props) {
  var state = Props.state;
  Props.apply;
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Favorite Movies"), $$Array.of_list(List.map(favoriteMovieElement, state.favoritedMovies)));
}

var make = FavoriteMovies;

exports.favoriteMovieElement = favoriteMovieElement;
exports.make = make;
/* react Not a pure module */
