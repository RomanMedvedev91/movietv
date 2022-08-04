/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line object-curly-newline
import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
import { Icon } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';

// import MovieCard from '../MovieCard/MovieCard';
import { CarouselContainer, CarouselMoviesContainer, MoviesTitle } from './CardCarousel.style';

function CardCarousel({
  // movies,
  visibleSlides = 4,
  titleLink,
  naturalSlideWidth = 1,
  naturalSlideHeight = 1.8,
  title,
  titleHeader,
  totalSlides,
  // modalHadler,
  // category,
  children
}) {
  return (
    <CarouselMoviesContainer>
      {title && (
        <MoviesTitle>
          <h2>{titleHeader}</h2>
          <Link to={titleLink}>
            See more
            <Icon name="angle right" size="small" />
          </Link>
        </MoviesTitle>
      )}

      <CarouselContainer>
        <CarouselProvider
          naturalSlideWidth={naturalSlideWidth}
          naturalSlideHeight={naturalSlideHeight}
          totalSlides={totalSlides}
          visibleSlides={visibleSlides}
          step={1}

          // eslint-disable-next-line react/jsx-closing-bracket-location
        >
          <ButtonBack>
            <Icon name="angle left" size="big" />
          </ButtonBack>
          <Slider>
            {/* {movies.map((movie, indx) => (
              <Slide key={movie.id} index={indx}>
                <div style={{ padding: 10 }}>
                  <MovieCard
                    // fluid
                    id={movie.id}
                    movie={movie}
                    image={movie.poster_path || movie.profile_path}
                    header={movie.title || movie.name}
                    trailer={(movie.trailer && movie.trailer[0]) || movie}
                    modalHadler={modalHadler}
                    category={category}
                  />
                </div>
              </Slide>
            ))} */}
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

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line object-curly-newline
// import { Link } from 'react-router-dom';
// import { CarouselProvider, Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
// import { Icon } from 'semantic-ui-react';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// import MovieCard from '../MovieCard/MovieCard';
// import { CarouselContainer, CarouselMoviesContainer, MoviesTitle } from './CardCarousel.style';

// function CardCarousel({
//   movies,
//   visibleSlides = 4,
//   link,
//   naturalSlideWidth = 1,
//   naturalSlideHeight = 1.7,
//   header,
//   modalHadler,
//   category
// }) {
//   return (
//     <CarouselMoviesContainer>
//       <MoviesTitle>
//         <h2>{header}</h2>
//         <Link to={link}>
//           See more
//           <Icon name="angle right" size="small" />
//         </Link>
//       </MoviesTitle>

//       <CarouselContainer>
//         <CarouselProvider
//           naturalSlideWidth={naturalSlideWidth}
//           naturalSlideHeight={naturalSlideHeight}
//           totalSlides={movies.length}
//           visibleSlides={visibleSlides}
//           step={1}

//           // eslint-disable-next-line react/jsx-closing-bracket-location
//         >
//           <ButtonBack>
//             <Icon name="angle left" size="big" />
//           </ButtonBack>
//           <Slider>
//             {movies.map((movie, indx) => (
//               <Slide key={movie.id} index={indx}>
//                 <div style={{ padding: 10 }}>
//                   <MovieCard
//                     // fluid
//                     id={movie.id}
//                     movie={movie}
//                     image={movie.poster_path || movie.profile_path}
//                     header={movie.title || movie.name}
//                     trailer={(movie.trailer && movie.trailer[0]) || movie}
//                     modalHadler={modalHadler}
//                     category={category}
//                   />
//                 </div>
//               </Slide>
//             ))}
//           </Slider>
//           <ButtonNext>
//             <Icon name="angle right" size="big" />
//           </ButtonNext>
//         </CarouselProvider>
//       </CarouselContainer>
//     </CarouselMoviesContainer>
//   );
// }

// export default CardCarousel;

// react loop children
// react children.map
