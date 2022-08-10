import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import {
  getPersonDetails,
  getPersonMoviesCredits,
  getPersonExternalIds
} from '../../constants/apiUrls';
import getData from '../../utilities/getData';

function Person() {
  const [isLoading, setIsLoading] = useState(false);
  const [personDetails, setPersonDetails] = useState(null);
  const [personCredits, setPersonCredits] = useState(null);
  const [personExternalIds, setPersonExternalIds] = useState(null);
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

      setPersonDetails(resPersonDetails);
      setPersonCredits(resPersonCredits);
      setPersonExternalIds(resPersonExternalIds);

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };
    loadMovie();
  }, [personId]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {console.log('personDetails', personDetails)}
      {console.log('personCredits', personCredits)}
      {console.log('personExternalIds', personExternalIds)}
      <div>Person</div>
      <Outlet />
    </>
  );
}

export default Person;
