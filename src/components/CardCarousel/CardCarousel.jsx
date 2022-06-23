// eslint-disable-next-line object-curly-newline
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CardSlide from './CardSlide';
import DotGroup from './DotGroup';

function CardCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.3}
      totalSlides={5}
      visibleSlides={3}
      // eslint-disable-next-line react/jsx-closing-bracket-location
      style={{ width: '800px' }}>
      <ButtonBack>Back</ButtonBack>
      <Slider>
        <CardSlide
          image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
          index={0}
          header="Matthew House"
          meta="Friend"
        />
        <CardSlide
          header="Elliot Baker"
          image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
          index={1}
          meta="Friend"
        />
        <CardSlide
          header="Steve Sanders"
          image="https://place-hold.it/800x800&text=Steve&fontsize=32"
          index={2}
          meta="Friend"
        />
        <CardSlide
          header="Steve Sanders2"
          image="https://place-hold.it/800x800&text=Steve&fontsize=32"
          index={3}
          meta="Friend"
        />
        <CardSlide
          header="Steve Sanders3"
          image="https://place-hold.it/800x800&text=Steve&fontsize=32"
          index={4}
          meta="Friend"
        />
      </Slider>
      <ButtonNext>Next</ButtonNext>
      <DotGroup slides={5} />
    </CarouselProvider>
  );
}

export default CardCarousel;
