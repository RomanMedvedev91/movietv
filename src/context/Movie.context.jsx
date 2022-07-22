import { createContext, useMemo, useState } from 'react';

export const MovieContext = createContext({
  currentMovie: null,
  setCurrentMovie: () => null
});

export function MovieProvider({ children }) {
  const [currentMovie, setCurrentMovie] = useState(null);

  const value = useMemo(
    () => ({
      currentMovie,
      setCurrentMovie
    }),
    [currentMovie]
  );
  // const [currentSearchMovies, setSearchMovies] = useState(null);
  // const value = useMemo(() => ({ currentSearchMovies, setSearchMovies }), [currentSearchMovies]);

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}
