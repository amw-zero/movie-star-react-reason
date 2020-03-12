open MovieStarReason;

[@react.component]
let make = () => {
  let initialState = {movies: [||], favoritedMovies: []};

  let (state, setState) = React.useState(() => initialState);
  let apply = fn => setState(fn);

  let _movieElement = (movie, string) =>
    <p onClick={_ => apply(Command.toggleFavoriteMovie(movie))}>
      {ReasonReact.string(string)}
    </p>;

  let movieElement = (state, movie) =>
    switch (List.filter(m => m == movie, state.favoritedMovies)) {
    | [movie] => _movieElement(movie, movie.title ++ " *")
    | _ => _movieElement(movie, movie.title)
    };

  <>
    {state.movies |> Array.map(movieElement(state))->ReasonReact.array}
    <button onClick={_ => apply(Command.viewTopMovies)}>
      {ReasonReact.string("view top movies")}
    </button>
  </>;
};
