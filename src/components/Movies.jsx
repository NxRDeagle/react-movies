import * as React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import Preloader from './Preloader';
import Search from './Search';

const API_KEY = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const [filmList, setFilmList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  React.useEffect(() => {
    const fetchFilmsData = async () => {
      try {
        setIsLoading(true);
        const searchQueryParam = search === '' ? '' : `&s=${search}`;
        const filterQueryParam = filter === 'all' ? '' : `&type=${filter}`;
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${API_KEY}${searchQueryParam}${filterQueryParam}`,
        );
        const result = response.data.Search;
        setFilmList(result);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(`Ошибка запроса: ${err.message}`);
        } else {
          setError('Произошла неизвестная ошибка');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmsData();
  }, [search, filter]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Search search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="movies_container">
          {filmList && filmList.length > 0 ? (
            filmList.map((film, idx) => {
              return (
                <Movie
                  key={idx}
                  title={film.Title}
                  year={film.Year}
                  poster={film.Poster}
                  type={film.Type}
                />
              );
            })
          ) : search === '' ? (
            <h4>Enter the title of the movie you would like to find.</h4>
          ) : (
            <h4>Nothing found</h4>
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
