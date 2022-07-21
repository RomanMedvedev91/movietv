/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
// import { Card } from 'semantic-ui-react';
import MovieCard from '../MovieCard/MovieCard';

function CardSlide({ index, ...cardProps }) {
  // const { image, index, header, meta } = cardProps;
  return (
    <Slide index={index}>
      <div style={{ padding: 10 }}>
        {/* <Card fluid {...cardProps} /> */}
        <MovieCard fluid {...cardProps} />
      </div>
    </Slide>
  );
}

CardSlide.propTypes = {
  index: PropTypes.number.isRequired
};
export default CardSlide;
