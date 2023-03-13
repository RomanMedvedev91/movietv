/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';

import getData from '../../utilities/getData';
import ItemsList from '../../components/ItemsList/ItemsList';
import { TMDB_POSTER_PATH, getUrl, pathList } from '../../constants/apiUrls';
import { StyledSearchContainer, StyledSearchList, StyledTabsContainer } from './Search.style';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const [currentPreviewTab, setCurrentPreviewTab] = useState(null);
  const defaultTabsData = {
    movie: 0,
    tv: 1,
    person: 2
  };
  const [defaultTab, setDefaultTab] = useState(null);
  const [currentSearchPreview, setCurrentSearchPreview] = useState(null);

  const [moviesPreview, setMoviespreview] = useState(null);
  const [tvShowsPreview, setTvShowsPreview] = useState(null);
  const [personsPrevivew, setPersonsPrevivew] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();
  const { isMobile } = useMediaQuery();

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);

      const getCurrentCategoryUrl = getUrl(pathList.search[currentPreviewTab], {
        query,
        page: activePage
      });
      const currentPreivewRes = await getData(getCurrentCategoryUrl);
      setCurrentSearchPreview(currentPreivewRes);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadMovies();
    return () => {
      setCurrentSearchPreview(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, currentPreviewTab]);

  useEffect(() => {
    const loadMovies = async () => {
      if (!query) return;

      setIsLoading(true);
      try {
        // get multi search url to define type of current category
        const searchUrl = getUrl(pathList.search.multi, { query });
        const multiSearchRes = await getData(searchUrl);
        // get category type of first item from multi search
        const currentCategory = multiSearchRes?.results[0]?.media_type || 'movie';
        setCurrentPreviewTab(currentCategory);
        setDefaultTab(defaultTabsData[currentCategory]);

        const searcMovieshUrl = getUrl(pathList.search.movie, { query });
        const searchTvShowsUrl = getUrl(pathList.search.tv, { query });
        const searchPersonUrl = getUrl(pathList.search.person, { query });

        // get url for movie, tv, person to get total result for each tab
        const moviesRes = await getData(searcMovieshUrl);
        const TvShowsRes = await getData(searchTvShowsUrl);

        const PersonsRes = await getData(searchPersonUrl);

        setMoviespreview(moviesRes);
        setTvShowsPreview(TvShowsRes);
        setPersonsPrevivew(PersonsRes);

        if (currentCategory === 'person') {
          setCurrentSearchPreview(PersonsRes);
        }
        if (currentCategory === 'movie') {
          setCurrentSearchPreview(moviesRes);
        }
        if (currentCategory === 'tv') {
          setCurrentSearchPreview(TvShowsRes);
        }
      } catch (error) {
        throw new Error();
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadMovies();
    return () => {
      setMoviespreview(null);
      setTvShowsPreview(null);
      setPersonsPrevivew(null);
      setCurrentSearchPreview(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onChangePage = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };
  const cardHandleClick = (movie, id) => {
    let cat;
    if (!movie.media_type && movie.first_air_date) {
      cat = 'tv';
    } else if (!movie.media_type && movie.known_for_department) {
      cat = 'person';
    } else {
      cat = movie.media_type || 'movie';
    }
    navigate(`/${cat}/${id}`, { state: { id, category: cat } });
  };

  const getImageUrl = (item) => {
    if (item.poster_path) {
      return `${TMDB_POSTER_PATH + item.poster_path}`;
    }
    if (item.profile_path) {
      return `${TMDB_POSTER_PATH + item.profile_path}`;
    }

    return 'https://react.semantic-ui.com/images/wireframe/image.png';
  };

  const panes = [
    {
      menuItem: `Movies (${moviesPreview && moviesPreview.total_results})`,
      render: () => (
        <Tab.Pane attached={false}>
          {currentSearchPreview && (
            <ItemsList
              moviesPreview={currentSearchPreview}
              cardHandleClick={cardHandleClick}
              getImageUrl={getImageUrl}
              isLoading={isLoading}
              onChangePage={onChangePage}
              activePage={activePage}
            />
          )}
        </Tab.Pane>
      )
    },
    {
      menuItem: `TV Shows (${tvShowsPreview && tvShowsPreview.total_results})`,
      render: () => (
        <Tab.Pane attached={false}>
          {currentSearchPreview && (
            <ItemsList
              moviesPreview={currentSearchPreview}
              cardHandleClick={cardHandleClick}
              getImageUrl={getImageUrl}
              isLoading={isLoading}
              onChangePage={onChangePage}
              activePage={activePage}
            />
          )}
        </Tab.Pane>
      )
    },
    {
      menuItem: `Persons (${personsPrevivew && personsPrevivew.total_results})`,
      render: () => (
        <Tab.Pane attached={false}>
          {currentSearchPreview && (
            <ItemsList
              moviesPreview={currentSearchPreview}
              cardHandleClick={cardHandleClick}
              getImageUrl={getImageUrl}
              isLoading={isLoading}
              onChangePage={onChangePage}
              activePage={activePage}
            />
          )}
        </Tab.Pane>
      )
    }
  ];

  const onTabChangeHandler = (e, data) => {
    // set active page = 1
    const tabsData = {
      0: 'movie',
      1: 'tv',
      2: 'person'
    };
    const activeTabIndex = data.activeIndex;
    setCurrentPreviewTab(tabsData[activeTabIndex]);
    setDefaultTab(defaultTabsData[defaultTab]);
    setActivePage(1);
  };

  // eslint-disable-next-line max-len
  // eslint-disable-next-line react/no-unstable-nested-components
  function TabExampleSecondaryPointing() {
    return (
      <Tab
        activeIndex={defaultTab}
        onTabChange={onTabChangeHandler}
        menu={{ text: true }}
        panes={panes}
      />
    );
  }

  return (
    <StyledSearchContainer>
      <StyledSearchList isMobile={isMobile}>
        <StyledTabsContainer isMobile={isMobile}>
          <h2>
            Search Results:
            <span>{query}</span>
          </h2>
          {TabExampleSecondaryPointing()}
        </StyledTabsContainer>
      </StyledSearchList>
    </StyledSearchContainer>
  );
}

export default Search;
