/* eslint-disable object-curly-newline */
import { Embed } from 'semantic-ui-react';
import { TrailerContainer } from './TrailerCard.style';
// import { tmdbPosterPath } from '../../constants/apiUrls';

function TrailerCard({ trailer, modalHadler }) {
  return (
    <TrailerContainer>
      <Embed
        onClick={() => modalHadler(trailer)}
        icon="play"
        active={false}
        id={trailer?.key}
        // placeholder={`https://i.ytimg.com/vi/${trailer.key}/hqdefault.jpg`}
        placeholder={`https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`}
        // placeholder={`${tmdbPosterPath}${trailer.backdropPath}`}
        source="youtube"
      />
      <h3>{trailer.title}</h3>
      <p>{trailer.name}</p>
    </TrailerContainer>
  );
}

export default TrailerCard;
