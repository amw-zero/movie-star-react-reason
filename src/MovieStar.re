open MovieStarReason;

[@react.component]
let make = () => {
  let initialState = defaultState;

  let (state, setState) = React.useState(() => initialState);
  let apply = fn => setState(fn);
  let observer = s => setState(_ => s);
  let server = f =>
    f([|
      {title: "Wayne's World"},
      {title: "Wayne's World 2"},
      {title: "Unabomber"},
      {title: "Cat in the Hat"},
      {title: "Sharkboy and Lavagirl"},
    |]);

  <>
    <button onClick={_ => Command.clearFavoriteMovies->apply}>
      {ReasonReact.string("Clear Favorites")}
    </button>
    <button onClick={_ => Command.asyncTopMovies(state, server, observer)}>
      {ReasonReact.string("View Top Movies")}
    </button>
    <TopMovies state apply />
    <FavoriteMovies state apply />
  </>;
};
