// eslint-disable-next-line object-curly-newline
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Icon } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CardSlide from './CardSlide';
// import DotGroup from './DotGroup';

import { CarouselContainer } from './CardCarousel.style';

function CardCarousel({ movies }) {
  // console.log(movies);
  return (
    <CarouselContainer>
      <CarouselProvider
        naturalSlideWidth={70}
        naturalSlideHeight={130}
        totalSlides={movies.length}
        visibleSlides={4}
        step={1}

        // eslint-disable-next-line react/jsx-closing-bracket-location
        // style={{ width: '800px' }}
      >
        <ButtonBack>
          <Icon name="angle left" size="big" />
        </ButtonBack>
        <Slider>
          {movies.map((movie, indx) => (
            <CardSlide
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              index={indx}
              header={movie.title || movie.name}
            />
          ))}
        </Slider>
        <ButtonNext>
          <Icon name="angle right" size="big" />
        </ButtonNext>
        {/* <DotGroup slides={movies.length} /> */}
      </CarouselProvider>
    </CarouselContainer>
  );
}

export default CardCarousel;
