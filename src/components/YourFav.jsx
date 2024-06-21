import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavouriteContext';
import './Header.css';

const Yourfav = () => {
  const { favorites, removeFavorite } = useFavorites();

  const favoriteEpisodes = Object.values(favorites);

  if (favoriteEpisodes.length === 0) {
    return <div>You have not added any faves.</div>;
  }

  return (
    <div className="favorites-container">
      <h1>My Faves</h1>
      <ul className="favorites-list">
        {favoriteEpisodes.map((episode) => (
          <li key={episode.id} className="favorite-item">
            <h3>{episode.title}</h3>
            <p>Show: <Link to={`/show/${episode.showId}`}>{episode.showTitle}</Link></p>
            <p>Season: {episode.seasonNumber}</p>
            <button onClick={() => removeFavorite(episode.id)}>Remove Fave</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Yourfav;
