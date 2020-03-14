open MovieStarReason;

[@react.component]
let make = () => {
  let initialState = {movies: [||], favoritedMovies: []};

  let (state, setState) = React.useState(() => initialState);
  let apply = fn => setState(fn);

  <>
    <TopMovies state={state} apply={apply} />
    <FavoriteMovies state={state} apply={apply} />
  </>
};
