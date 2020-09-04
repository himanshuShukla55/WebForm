import React, { useEffect, useRef } from "react";
import { loadEsriModules } from "../utils/loader";

export default function Search({ onSearch }) {
  const searchEl = useRef();

  useEffect(() => {
    // Use esri-loader to load the Search widget, place it in this component,
    // and set up an event listener for when the serach happens, call onSearch()
    let event;
    loadEsriModules(["esri/widgets/Search"]).then(([Search]) => {
      const s = new Search({
        // usually we would pass the map "view" here, but we do not
        // need to, since we're taking care of the map pan
        // ourselves via the "search-complete" event below.
        container: searchEl.current
      });
      event = s.on("search-complete", res => {
        onSearch([
          res.results[0].results[0].feature.geometry.x,
          res.results[0].results[0].feature.geometry.y
        ]);
      });
    });

    return () => {
      event.remove();
    };
  }, []);
  return <div className="panelSearch" ref={searchEl} />;
}
