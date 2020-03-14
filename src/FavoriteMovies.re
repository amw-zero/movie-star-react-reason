open MovieStarReason;

let favoriteMovieElement = movie => <p>{React.string(movie.title)}</p>;

[@react.component]
let make = (~state, ~apply) => <>
  <h1>{ReasonReact.string("Favorite Movies")}</h1>
  {List.map(favoriteMovieElement, state.favoritedMovies) |> Array.of_list |> ReasonReact.array}
</>;