/* eslint-disable indent */
/* eslint-disable react/jsx-closing-bracket-location */
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Icon, Card, Button } from 'semantic-ui-react';
import {
  getPersonDetails,
  getPersonMoviesCredits,
  getPersonExternalIds,
  // TMDB_POSTER_BASE,
  TMDB_POSTER_PATH
  // TMDB_BACKDROP_PATH
} from '../../constants/apiUrls';
import getData from '../../utilities/getData';
import {
  BackgroundImage,
  PersonContainer,
  PersonDataContainer,
  PersonDataTable,
  PersonDetail,
  PosterContainer
} from './Person.style';
import * as route from '../../constants/routes';

import CardCarousel from '../../components/CardCarousel/CardCarousel';

function Person() {
  const [isLoading, setIsLoading] = useState(false);
  const [personDetails, setPersonDetails] = useState(null);
  const [personCredits, setPersonCredits] = useState(null);
  const [personExternalIds, setPersonExternalIds] = useState(null);
  const [personKnownForMovies, setPersonKnownForMovies] = useState(null);
  const [showMoreBio, setShowMoreBio] = useState(false);
  const { personId } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    const loadMovie = async () => {
      setIsLoading(true);
      const personDetailsUrl = getPersonDetails(personId);
      const personCreditsUrl = getPersonMoviesCredits(personId);
      const personExternalIdsUrl = getPersonExternalIds(personId);

      const resPersonDetails = await getData(personDetailsUrl);
      const resPersonCredits = await getData(personCreditsUrl);
      const resPersonExternalIds = await getData(personExternalIdsUrl);

      const knownForMovies = resPersonCredits.cast.filter(
        (el) => el.backdrop_path !== null
        // && el.media_type !== 'tv'
      );
      const sortedKnownForMovies = knownForMovies
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 10);

      setPersonDetails(resPersonDetails);
      setPersonCredits(resPersonCredits);
      setPersonExternalIds(resPersonExternalIds);
      setPersonKnownForMovies(sortedKnownForMovies);

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };
    loadMovie();
  }, [personId]);

  const getPersonBiography = () => {
    const length = personDetails.biography.length / 2;
    return showMoreBio
      ? personDetails.biography
      : `${personDetails.biography.substring(0, length)} . . . `;
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {console.log('personDetails', personDetails)}
      {console.log('personCredits', personCredits)}
      {console.log('personExternalIds', personExternalIds)}
      {!isLoading && personDetails && (
        <PersonContainer>
          {console.log('getKnownForMovies', console.log(personKnownForMovies))}
          <PersonDetail>
            <BackgroundImage>
              <img src="https//" alt="mainBackground" />
            </BackgroundImage>

            <PosterContainer>
              <img src={`${TMDB_POSTER_PATH + personDetails.profile_path}`} alt="poster" />
            </PosterContainer>

            <PersonDataContainer>
              <h2>{personDetails.name}</h2>
              {/* <p>
              <span>{getReleaseDateAndCountry()}</span>
              <span>{getGenres()}</span>
              <span>{runTime()}</span>
            </p> */}
              <p>
                {getPersonBiography()}
                <Button onClick={() => setShowMoreBio(!showMoreBio)}>
                  {showMoreBio ? 'Show less' : 'Show more'}
                </Button>
              </p>

              <PersonDataTable>
                <div>
                  <span>Known For</span>
                  <span>{personDetails.known_for_department}</span>
                </div>
                {/* <div>
                <span>Known credits</span>
                <span>Known credits</span>
              </div> */}

                <div>
                  <span>Gender</span>
                  <span>{personDetails.gender === 2 ? 'Male' : 'Female'}</span>
                </div>

                <div>
                  <span>Birthday</span>
                  <span>{personDetails.birthday}</span>
                </div>

                {personDetails.deathday && (
                  <div>
                    <span>Death Day</span>
                    <span>{personDetails.deathday}</span>
                  </div>
                )}

                <div>
                  <span>Place of Birth</span>
                  <span>{personDetails.place_of_birth}</span>
                </div>
              </PersonDataTable>
              {personExternalIds.facebook_id && (
                <a
                  href={`https://www.facebook.com/${personExternalIds.facebook_id}`}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="facebook" size="big" />
                </a>
              )}
              {personExternalIds.imdb_id && (
                <a
                  href={`https://www.imdb.com/name/${personExternalIds.imdb_id}`}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="imdb" size="big" />
                </a>
              )}
              {personExternalIds.twitter_id && (
                <a
                  href={`https://www.twitter.com/${personExternalIds.twitter_id}`}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="twitter" size="big" />
                </a>
              )}
              {personExternalIds.instagram_id && (
                <a
                  href={`https://www.instagram.com/${personExternalIds.instagram_id}`}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="instagram" size="big" />
                </a>
              )}
            </PersonDataContainer>
          </PersonDetail>
          {personKnownForMovies && (
            <CardCarousel
              title
              titleHeader="Known For"
              titleLink={`${route.MOVIES}`}
              totalSlides={personKnownForMovies.length}
              visibleSlides={5}>
              {personKnownForMovies.map((movie) => (
                <Card
                  key={movie.id}
                  image={
                    movie.backdrop_path
                      ? `${TMDB_POSTER_PATH + movie.poster_path}`
                      : 'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                  header={movie.title || movie.name}
                  meta={movie.release_date || movie.first_air_date}
                />
              ))}
            </CardCarousel>
          )}
        </PersonContainer>
      )}
      <Outlet />
    </>
  );
}

export default Person;
