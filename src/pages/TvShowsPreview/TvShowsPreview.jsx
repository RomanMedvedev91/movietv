// /* eslint-disable react/jsx-closing-bracket-location */
// /* eslint-disable object-curly-newline */
// import { useEffect, useState } from 'react';
// import { useNavigate, Outlet, useParams } from 'react-router-dom';

// import { Icon, Pagination, Card, Dropdown, Button, Placeholder, Image } from 'semantic-ui-react';

// import getData from '../../utilities/getData';

// import {
//   popularTvUrl,
//   airingTodayTvUrl,
//   topRatedTvUrl,
//   onTheAirTvUrl,
//   TMDB_POSTER_PATH,
//   getTvShowsFilterUrl,
//   filterGenres,
//   filterSortBy
// } from '../../constants/apiUrls';

// import {
//   StyledMoviesContainer,
//   StyledMoviesList,
//   StyledPaginationWrapper,
//   StyledFilterContainer
// } from '../MoviesPreview/moviesPreview.style';

// import * as route from '../../constants/routes';

// const currentYear = new Date().getFullYear();
// const filterYear = new Array(currentYear - 1899)
//   .fill({})
//   .map((obj, indx) => ({ key: indx + 1, text: currentYear - indx, value: currentYear - indx }));

// function TvShowsPreview() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [tvShowsUrl, setTvShowsUrl] = useState(popularTvUrl);
//   const [tvShowsTitle, setTvShowsTitle] = useState('Popular TV Shows');

//   const [moviesPreview, setMoviespreview] = useState(null);
//   const [activePage, setActivePage] = useState(1);
//   const [filterTempState, setFilterTempState] = useState({
//     sortBy: null,
//     genres: [],
//     year: null
//   });

//   const [filterState, setFilterState] = useState(null);

//   const { tvShowCategory } = useParams();

//   const navigate = useNavigate();
//   const cardHandleClick = (category, id) => {
//     navigate(`/${category}/${id}`);
//   };

//   useEffect(() => {
//     const loadMovies = async () => {
//       setIsLoading(true);

//       const chooseCategory = (category, page) => {
//         if (filterState) {
//           const getTvShowsUrl = getTvShowsFilterUrl(filterState, page);
//           setTvShowsUrl(getTvShowsUrl);
//           return;
//         }
//         if (!category) {
//           const getTvShowsUrl = popularTvUrl(page);
//           setTvShowsUrl(getTvShowsUrl);
//           setTvShowsTitle('Popular TV Shows');
//         }

//         if (category === route.TOP_RATED) {
//           const getTvShowsUrl = topRatedTvUrl(page);
//           setTvShowsUrl(getTvShowsUrl);
//           setTvShowsTitle('Top Rated Tv Shows');
//         }

//         if (category === route.AIRING_TODAY) {
//           const getTvShowsUrl = airingTodayTvUrl(page);
//           setTvShowsUrl(getTvShowsUrl);
//           setTvShowsTitle('Airing Today TV Shows');
//         }

//         if (category === route.ON_TV) {
//           const getTvShowsUrl = onTheAirTvUrl(activePage);
//           setTvShowsUrl(getTvShowsUrl);
//           setTvShowsTitle('Currently Airing TV Shows');
//         }
//       };
//       chooseCategory(tvShowCategory, activePage);

//       // const movieUrl = !filterState
//       //   ? popularTvUrl(activePage)
//       //   : getTvShowsFilterUrl(filterState, activePage);

//       const res = await getData(tvShowsUrl);
//       // const res = await getData(movieUrl);
//       setMoviespreview(res.results);

//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     };
//     loadMovies();
//   }, [tvShowCategory, filterState, activePage, tvShowsUrl]);

//   const onChangePage = (e, pageInfo) => {
//     setActivePage(pageInfo.activePage);
//   };

//   const sortHandleChange = (e, { value }, type) => {
//     setFilterTempState({ ...filterTempState, [type]: value });
//   };

//   const setNewFilter = () => {
//     setFilterState(filterTempState);
//   };

//   return (
//     <>
//       <StyledMoviesContainer>
//         <StyledMoviesList>
//           {console.log('tvShowsUrl', tvShowsUrl)}
//           {console.log('tvShowsTitle', tvShowsTitle)}
//           {moviesPreview && (
//             <>
//               <h1>{tvShowsTitle}</h1>
//               <StyledFilterContainer>
//                 <Dropdown
//                   clearable
//                   options={filterSortBy}
//                   selection
//                   placeholder="Select Filter"
//                   onChange={(e, obj) => sortHandleChange(e, obj, 'sortBy')}
//                 />
//                 <Dropdown
//                   options={filterGenres}
//                   selection
//                   multiple
//                   placeholder="Genres"
//                   onChange={(e, obj) => sortHandleChange(e, obj, 'genres')}
//                 />

//                 <Dropdown
//                   selection
//                   clearable
//                   placeholder="Year"
//                   options={filterYear}
//                   onChange={(e, obj) => sortHandleChange(e, obj, 'year')}
//                 />

//                 <Button
//                   content="Filter"
//                   disabled={
//                     !filterTempState.sortBy && !filterTempState.genres[0] && !filterTempState.year
//                   }
//                   primary
//                   onClick={setNewFilter}
//                 />
//               </StyledFilterContainer>

//               <Card.Group itemsPerRow={5}>
//                 {moviesPreview.map((movie) => (
//                   <Card key={movie.id} onClick={() => cardHandleClick('tv', movie.id)}>
//                     {isLoading ? (
//                       <Placeholder inverted style={{ height: 300, width: 200 }}>
//                         <Placeholder.Image rectangular />
//                       </Placeholder>
//                     ) : (
//                       <Image
//                         style={{ height: 300, width: 200 }}
//                         src={
//                           movie.backdrop_path
//                             ? `${TMDB_POSTER_PATH + movie.poster_path}`
//                             : 'https://react.semantic-ui.com/images/wireframe/image.png'
//                         }
//                       />
//                     )}

//                     <Card.Content>
//                       {isLoading ? (
//                         <Placeholder inverted>
//                           <Placeholder.Header>
//                             <Placeholder.Line length="long" />
//                             <Placeholder.Line length="medium" />
//                           </Placeholder.Header>
//                         </Placeholder>
//                       ) : (
//                         <>
//                           <Card.Header>{movie.name}</Card.Header>
//                           <Card.Meta>{movie.first_air_date}</Card.Meta>
//                         </>
//                       )}
//                     </Card.Content>
//                   </Card>
//                 ))}
//               </Card.Group>
//               <StyledPaginationWrapper>
//                 <Pagination
//                   defaultActivePage={activePage}
//                   ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
//                   firstItem={{ content: <Icon name="angle double left" />, icon: true }}
//                   lastItem={{ content: <Icon name="angle double right" />, icon: true }}
//                   prevItem={{ content: <Icon name="angle left" />, icon: true }}
//                   nextItem={{ content: <Icon name="angle right" />, icon: true }}
//                   totalPages={500}
//                   onPageChange={onChangePage}
//                   inverted
//                 />
//               </StyledPaginationWrapper>
//             </>
//           )}
//         </StyledMoviesList>
//       </StyledMoviesContainer>
//       <Outlet />
//     </>
//   );
// }

// export default TvShowsPreview;
