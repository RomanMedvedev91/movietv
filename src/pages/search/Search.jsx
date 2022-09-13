/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';

import SearchBar from '../../components/SearchBar/SearchBar';
import getData from '../../utilities/getData';

import ItemsList from '../../components/ItemsList/ItemsList';

import { TMDB_POSTER_PATH, getUrl, pathList } from '../../constants/apiUrls';

import { StyledSearchContainer, StyledSearchList, StyledTabsContainer } from './Search.style';

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
  // const [multiSearchPreview, setMultiSearchPreview] = useState(null);

  const [moviesPreview, setMoviespreview] = useState(null);
  const [tvShowsPreview, setTvShowsPreview] = useState(null);
  const [personsPrevivew, setPersonsPrevivew] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);

      // get multi search url to define type of current category
      const searchUrl = getUrl(pathList.search.multi, { query });
      const multiSearchRes = await getData(searchUrl);
      // get category type of first item from multi search
      const currentCategory = multiSearchRes?.results[0]?.media_type || 'movie';
      // setMultiSearchPreview(multiSearchRes);
      setCurrentPreviewTab(currentCategory);
      setDefaultTab(defaultTabsData[currentCategory]);

      const searcMovieshUrl = getUrl(pathList.search.movie, { query });
      const searchTvShowsUrl = getUrl(pathList.search.tv, { query });
      const searchPersonUrl = getUrl(pathList.search.person, { query });

      // get url for movie, tv, person to get total result for each tab
      const moviesRes = await getData(searcMovieshUrl);
      const TvShowsRes = await getData(searchTvShowsUrl);
      const PersonsRes = await getData(searchPersonUrl);

      // console.log('getSearchMovie', res.results);
      setMoviespreview(moviesRes);
      setTvShowsPreview(TvShowsRes);
      setPersonsPrevivew(PersonsRes);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    loadMovies();
  }, [query]);

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
  }, [activePage, currentPreviewTab]);

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
      cat = movie.media_type;
    }
    navigate(`/${cat}/${id}`);
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
      menuItem: `Movies (${moviesPreview.total_results})`,
      render: () => (
        <Tab.Pane loading={isLoading} attached={false}>
          {currentSearchPreview.results && (
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
      menuItem: `TV Shows (${tvShowsPreview.total_results})`,
      render: () => (
        <Tab.Pane loading={isLoading} attached={false}>
          {currentSearchPreview.results && (
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
      menuItem: `Persons (${personsPrevivew.total_results})`,
      render: () => (
        <Tab.Pane loading={isLoading} attached={false}>
          {currentSearchPreview.results && (
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
    <>
      {console.log('query', query)}
      {console.log('moviesPreview', moviesPreview)}
      {console.log('tvShowsPreview', tvShowsPreview)}
      {console.log('personsPrevivew', personsPrevivew)}
      {console.log('defaultTab', defaultTab)}
      {console.log('currentPreviewTab', currentPreviewTab)}
      <StyledSearchContainer>
        <StyledSearchList>
          <div>
            <SearchBar />
          </div>
          {isLoading ? <h4>loadiing</h4> : ''}
          {console.log('currentSearchPreview', currentSearchPreview)}

          {currentSearchPreview?.results && (
            <StyledTabsContainer>
              <h2>Search Results</h2>
              {TabExampleSecondaryPointing()}
            </StyledTabsContainer>
          )}
        </StyledSearchList>
      </StyledSearchContainer>
    </>
  );
}

export default Search;
