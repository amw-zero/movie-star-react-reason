open MovieStarReason;

[@react.component]
let make = () => {
  let initialState = {movies: [||], favoritedMovies: []};

  let (state, setState) = React.useState(() => initialState);

  let _movieElement = (movie, string) => 
    <p onClick={_ => setState(state => Command.toggleFavoriteMovie(state, movie))}>{ReasonReact.string(string)}</p>

  let movieElement = (state, movie) =>
    switch (List.filter(m => m == movie, state.favoritedMovies)) {
      | [movie] => _movieElement(movie, movie.title ++ " *")
      | _ => _movieElement(movie, movie.title)
    };
  
  <>
    {ReasonReact.array(Array.map(movieElement(state), state.movies))}
    <button onClick={_ => setState(state => Command.viewTopMovies(state))}>{ReasonReact.string("view top movies")}</button>
    <p>{ReasonReact.string("test")}</p>
  </>
};
