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
     <main>
      <div className="block">
        {starshipDetails.name ? 
        <>
        <div className="results">
          <div>Name: {starshipDetails.name}</div>
          <div>Model: {starshipDetails.model}</div>
          <Link id='link' to={'/'}>
            Return
          </Link>
        </div>
        </>
          :
          <>
          <p>Loading...</p>
        </>
        }
      </div>
     </main> 
    </>
   );
}
 
export default StarshipPage;