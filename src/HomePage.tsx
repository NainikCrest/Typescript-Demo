import React from "react";
import { fetchDataAction, toggleFavAction } from "./Action";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./Store";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Fragment>
      {" "}
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
