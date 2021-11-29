import React from "react";
import { toggleFavAction } from "./Action";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./Store";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));
export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<div>Loading..</div>}>
      <section className="episode-layout">
        <EpisodesList {...props} />
      </section>
    </React.Suspense>
  );
}
