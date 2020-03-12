'use strict';

var React = require("react");

function FavoriteMovies(Props) {
  return React.createElement("h1", undefined, "Favorite Movies");
}

var make = FavoriteMovies;

exports.make = make;
/* react Not a pure module */
