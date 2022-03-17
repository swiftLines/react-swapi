import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const[starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.starshipName.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  },[])

  return ( 
    <>
      <div>
        {starshipDetails.name ? 
        <>
          <div>Name: {starshipDetails.name}</div>
          <div>Model: {starshipDetails.model}</div>
          <Link to={'/'}>
            Return
          </Link>
        </>
          :
          <>
          <p>Loading...</p>
        </>
        }
      </div>
    </>
   );
}
 
export default StarshipPage;