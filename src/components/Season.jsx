import React from 'react';
import Episode from './Episode';  

const Season = ({ season, onPlay, onPause }) => {
  return (
    <div className="season">
      <h4 className="season-title">Season {season.number}</h4>
      <ul className="episodes-list">
        {season.episodes && season.episodes.length > 0 ? (
          season.episodes.map((episode) => (
            <Episode
              key={episode.id}
              episode={episode}
              onPlay={onPlay}
              onPause={onPause}
            />
          ))
        ) : (
          <li>This season does not have any episodes yet</li>
        )}
      </ul>
    </div>
  );
};

export default Season;
