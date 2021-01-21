import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ButtonAppBar from './components/AppBar';
import Loading from './components/Loading'
import People from './components/People';

const DATA_BASE = gql`{
	allPeople{
    people {
      id
      name
      birthYear
      eyeColor
      hairColor
      skinColor
      species {
        name
        id
      }
      homeworld {
        name
        id
      }
      vehicleConnection {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  }
}`




function hasSpecies(specie){
  if(specie != null) {
    return <span key={specie.id}> {specie.name} </span>
  } else {
    return ' ';
  }
}

function hasHomeWorld(homeWorld){
  if(homeWorld != null) {
    return <span key={homeWorld.id}> {homeWorld.name} </span>
  } else {
    return ' '
  }
}




function App() {
  const { loading, error, data} = useQuery(DATA_BASE);
  if (error) return <p>Failed to load data</p>
  return (

    < ><ButtonAppBar color="primary" />
      <div >{ loading ? <Loading/> : data[Object.keys(data)].people.map(person => {
      return <div key={person.id}>
        <People {...person}  specie={hasSpecies(person.species)} homeworld={hasHomeWorld(person.homeworld)} />
        </div>}
        ) }</div>
     
    </>
  );
}

export default App;
