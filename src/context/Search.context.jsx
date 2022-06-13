import { createContext, useMemo, useState } from 'react';

export const SearchContext = createContext({
  currentSearchMovies: null,
  setSearchMovies: () => null
});

export function SearchProvider({ children }) {
  const [currentSearchMovies, setSearchMovies] = useState(null);
  const [currentSearch, setCurrentSearch] = useState('');

  const value = useMemo(
    () => ({
      currentSearch,
      setCurrentSearch,
      currentSearchMovies,
      setSearchMovies
    }),
    [currentSearch, currentSearchMovies]
  );
  // const [currentSearchMovies, setSearchMovies] = useState(null);
  // const value = useMemo(() => ({ currentSearchMovies, setSearchMovies }), [currentSearchMovies]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
