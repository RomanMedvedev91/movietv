/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line object-curly-newline
import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
import { Icon } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselContainer, CarouselMoviesContainer, MoviesTitle } from './CardCarousel.style';
import { useMediaQuery } from '../../hooks/useMediaQuery.tsx';

function CardCarousel({
  // movies,
  visibleSlides = 4,
  titleLink,
  naturalSlideWidth = 1,
  naturalSlideHeight = 1.8,
  title,
  titleHeader,
  totalSlides,
  children
}) {
  const { isMobile } = useMediaQuery();
  return (
    <CarouselMoviesContainer>
      {title && (
        <MoviesTitle isMobile={isMobile}>
          <h2>{titleHeader}</h2>
          {titleLink && (
            <Link to={titleLink}>
              See more
              <Icon name="angle right" size="small" />
            </Link>
          )}
        </MoviesTitle>
      )}

      <CarouselContainer>
        <CarouselProvider
          naturalSlideWidth={naturalSlideWidth}
          naturalSlideHeight={naturalSlideHeight}
          totalSlides={totalSlides}
          visibleSlides={isMobile ? 1 : visibleSlides}
          step={1}
        >
          <ButtonBack>
            <Icon name="angle left" size="big" />
          </ButtonBack>
          <Slider>
            {React.Children.map(children, (child, indx) => (
              <Slide index={indx}>{child}</Slide>
            ))}
          </Slider>
          <ButtonNext>
            <Icon name="angle right" size="big" />
          </ButtonNext>
        </CarouselProvider>
      </CarouselContainer>
    </CarouselMoviesContainer>
  );
}

export default CardCarousel;
