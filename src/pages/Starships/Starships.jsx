import React, { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";


const Starships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(()=>{
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  })

  return ( 
    <>
    <div>
      {starships.map((starshipName) => (
        <Link key={starshipName.index} state={{ starshipName }} 
        to='/starship'>
        <div id="starship-div">
          {starshipName.name}
        </div>
      </Link>
      ))}
    </div>
    </>
   );
}
 
export default Starships;