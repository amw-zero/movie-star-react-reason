open MovieStarReason;

[@react.component]
let make = () => {
  let initialState = {movies: [||], favoritedMovies: []};

  let (state, setState) = React.useState(() => initialState);
  let apply = fn => setState(fn);

  let _movieElement = (movie, string) =>
    <p onClick={_ => Command.toggleFavoriteMovie(movie) |> apply}>
      {ReasonReact.string(string)}
    </p>;

  let movieElement = (state, movie) =>
    switch (List.filter(m => m == movie, state.favoritedMovies)) {
    | [movie] => _movieElement(movie, movie.title ++ " *")
    | _ => _movieElement(movie, movie.title)
    };

  <>
    <h1>{ReasonReact.string("Top Movies")}</h1>
    {(state.movies |> Array.map(movieElement(state)))->ReasonReact.array}
    <button onClick={_ => Command.viewTopMovies |> apply}>
      {ReasonReact.string("view top movies")}
    </button>
  </>;
};
