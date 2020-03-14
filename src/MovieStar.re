open MovieStarReason;

[@react.component]
let make = () => {
  let initialState = {movies: [||], favoritedMovies: []};

  let (state, setState) = React.useState(() => initialState);
  let apply = fn => setState(fn);

  <>
    <button onClick={_ => Command.clearFavoriteMovies->apply}>{ReasonReact.string("Clear favorites")}</button>
    <TopMovies state={state} apply={apply} />
    <FavoriteMovies state={state} apply={apply} />
  </>
};
