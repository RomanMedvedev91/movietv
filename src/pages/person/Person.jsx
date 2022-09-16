/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable react/jsx-closing-bracket-location */
import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Icon, Card, Button, Table, Tab, Dimmer, Loader } from 'semantic-ui-react';

import {
  getPersonDetails,
  getPersonMoviesCredits,
  getPersonExternalIds,
  TMDB_POSTER_PATH
} from '../../constants/apiUrls';

import getData from '../../utilities/getData';
import {
  BackgroundImage,
  PersonContainer,
  PersonDataContainer,
  PersonDataTable,
  PersonDetail,
  PosterContainer,
  PersonCreditsTable,
  MovieCreditLink
} from './Person.style';
// import * as route from '../../constants/routes';

import CardCarousel from '../../components/CardCarousel/CardCarousel';
import { HeaderGradient } from '../home/Home.style';

import personBackground from '../../assets/personBackground.jpg';

function Person() {
  const [isLoading, setIsLoading] = useState(false);
  const [personDetails, setPersonDetails] = useState(null);
  const [personCredits, setPersonCredits] = useState(null);
  const [personCreditsCrew, setPersonCreditsCrew] = useState(null);
  const [personExternalIds, setPersonExternalIds] = useState(null);
  const [personKnownForMovies, setPersonKnownForMovies] = useState(null);
  const [showMoreBio, setShowMoreBio] = useState(false);
  const { personId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const getSortedCreditList = (list) => {
    const sortedList = list.sort((a, b) => {
      const releaseA =
        a.release_date || a.first_air_date ? new Date(a.release_date || a.first_air_date) : null;
      const releaseB =
        b.release_date || b.first_air_date ? new Date(b.release_date || b.first_air_date) : null;

      if (!releaseA) return -1;
      if (!releaseB) return 1;
      return releaseB - releaseA;
    });
    return sortedList;
  };

  useEffect(() => {
    const loadMovie = async () => {
      if (!location.state?.id) {
        navigate('/404');
      } else {
        setIsLoading(true);
        const personDetailsUrl = getPersonDetails(personId);
        const personCreditsUrl = getPersonMoviesCredits(personId);
        const personExternalIdsUrl = getPersonExternalIds(personId);

        const resPersonDetails = await getData(personDetailsUrl);
        const resPersonCredits = await getData(personCreditsUrl);
        const resPersonExternalIds = await getData(personExternalIdsUrl);

        const knownForMovies = resPersonCredits.cast.filter((el) => el.backdrop_path !== null);

        const sortedCastList = getSortedCreditList(resPersonCredits.cast);
        const sortedCrewList = getSortedCreditList(resPersonCredits.crew);

        const sortedKnownForMovies = knownForMovies
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 10);

        setPersonDetails(resPersonDetails);
        setPersonCredits(sortedCastList);
        setPersonCreditsCrew(sortedCrewList);
        // setPersonCredits(resPersonCredits);
        setPersonExternalIds(resPersonExternalIds);
        setPersonKnownForMovies(sortedKnownForMovies);

        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    loadMovie();
  }, [personId]);

  const cardHandleClick = (category, id) => {
    navigate(`/${category}/${id}`, { state: { id, category } });
  };

  const getPersonBiography = () => {
    const length = personDetails.biography.length / 2;
    return showMoreBio
      ? personDetails.biography
      : `${personDetails.biography.substring(0, length)} . . . `;
  };

  const getAge = (birthday, deathday = null) => {
    const today = new Date();
    const birthDate = new Date(birthday);

    if (deathday) {
      const deadDate = new Date(deathday);
      let lifeAge = deadDate.getFullYear() - birthDate.getFullYear();
      const lifeMonth = deadDate.getMonth() - birthDate.getMonth();
      if (lifeMonth < 0 || (lifeMonth === 0 && deadDate.getDate() < birthDate.getDate())) {
        lifeAge -= 1;
      }
      return lifeAge;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  };

  const getRelieasedYear = (date) => {
    const year = date?.release_date || date?.first_air_date;
    return year?.slice(0, 4);
  };

  const personCreditsTable = (credits) => (
    <Table basic="very" compact collapsing inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" width={2}>
            Year
          </Table.HeaderCell>
          <Table.HeaderCell>Movies / TV Shoes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {credits.map((el) => (
          <Table.Row key={el.credit_id}>
            <Table.Cell textAlign="center">
              <span>{getRelieasedYear(el)}</span>
            </Table.Cell>

            <Table.Cell>
              {/* <MovieCreditLink to={cardHandleClick(el.media_type, el.id)}> */}
              {/* <MovieCreditLink to={`/${el.media_type}/${el.id}`}> */}
              <MovieCreditLink
                to={`/${el.media_type}/${el.id}`}
                state={{ id: el.id, category: el.media_type }}>
                {el.title || el.name}
              </MovieCreditLink>
              {(el.character && ` as ${el.character}`) ||
                (el.job && <span>{` as ${el.character || el.job}`}</span>)}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );

  const panes = [
    {
      menuItem: 'Cast',
      render: () => (
        <Tab.Pane loading={!personCredits} attached={false}>
          {personCredits && personCreditsTable(personCredits)}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Crew',
      render: () => (
        <Tab.Pane loading={!personCreditsCrew} attached={false}>
          {personCreditsCrew && personCreditsTable(personCreditsCrew)}
        </Tab.Pane>
      )
    }
  ];

  // eslint-disable-next-line max-len
  // eslint-disable-next-line react/no-unstable-nested-components
  function TabExampleSecondaryPointing() {
    return <Tab menu={{ text: true }} panes={panes} />;
  }

  return (
    <>
      {isLoading && (
        <Dimmer active>
          <Loader size="medium">Loading...</Loader>
        </Dimmer>
      )}

      {!isLoading && personDetails && (
        <PersonContainer>
          <PersonDetail>
            <BackgroundImage>
              <img src={personBackground} alt="personBackground" />
            </BackgroundImage>

            <PosterContainer>
              <img
                src={
                  personDetails.profile_path
                    ? `${TMDB_POSTER_PATH + personDetails.profile_path}`
                    : 'https://react.semantic-ui.com/images/wireframe/image.png'
                }
                alt="poster"
              />
            </PosterContainer>

            <PersonDataContainer>
              <h2>{personDetails.name}</h2>

              <p>
                {getPersonBiography()}
                <Button className="show-more" onClick={() => setShowMoreBio(!showMoreBio)}>
                  {showMoreBio ? 'Show less' : 'Show more'}
                </Button>
              </p>

              <PersonDataTable>
                <div>
                  <span>Known For</span>
                  <span>{personDetails.known_for_department}</span>
                </div>

                <div>
                  <span>Gender</span>
                  <span>{personDetails.gender === 2 ? 'Male' : 'Female'}</span>
                </div>

                <div>
                  <span>Birthday</span>
                  <span>
                    {personDetails.birthday}
                    {!personDetails.deathday && (
                      <span>{` (${getAge(personDetails.birthday)} years old)`}</span>
                    )}
                  </span>
                </div>

                {personDetails.deathday && (
                  <div>
                    <span>Death Day</span>
                    <span>
                      {personDetails.deathday}
                      <span>
                        {` (${getAge(personDetails.birthday, personDetails.deathday)} years old)`}
                      </span>
                    </span>
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
            <HeaderGradient />
          </PersonDetail>
          {personKnownForMovies && (
            <CardCarousel
              title
              titleHeader="Known For"
              // titleLink={`${route.MOVIES}`}
              totalSlides={personKnownForMovies.length}
              visibleSlides={5}>
              {personKnownForMovies.map((movie) => (
                <Card
                  key={`${movie.credit_id}`}
                  image={
                    movie.backdrop_path
                      ? `${TMDB_POSTER_PATH + movie.poster_path}`
                      : 'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                  header={movie.title || movie.name}
                  meta={movie.release_date || movie.first_air_date}
                  onClick={() => cardHandleClick(movie.media_type, movie.id)}
                />
              ))}
            </CardCarousel>
          )}
          <PersonCreditsTable>
            <h2>Person credits</h2>
            {TabExampleSecondaryPointing()}
          </PersonCreditsTable>
        </PersonContainer>
      )}
      <Outlet />
    </>
  );
}

export default Person;
