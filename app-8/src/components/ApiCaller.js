import React, { useEffect, useState } from "react";
import axios from 'axios'

function ApiCaller() {
  // States
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState({}) //? Should this be an object?

  const loadingDisplay = <p>loading</p>

  useEffect( () => {
    (async() => {
    try {
      const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/glaceon');
      setPokemonData(resp.data)
      setLoading(false)
      console.log(pokemonData)
    } catch (err) {
        console.log(err)}
    })()
    
  }, [])
  console.log(pokemonData)


  // //? Do I abstract this by putting it in a different component?
  // const Info = () => {
  //   const name = pokemonData.name
  //   const height = pokemonData.abilities[0]['ability'].name //! THIS DOES NOT WORK FOR SOME REASON
  //   const ability = pokemonData.abilities[0]['ability'].name //! THIS DOES NOT WORK FOR SOME REASON
  //   return (
  //     <>
  //     <h2>Pokemon: {name}</h2>
  //     <h3>Height: {height}</h3>
  //     <h3>Ability: {ability}</h3>
  //     </> 
  //   )
  // }



  //? Can't access indexes on api gets?
  // <h3>Abilities: {pokemonData.abilities[0]['ability']}</h3>

  return(
    <div>
      {/* {loading ? loadingDisplay : <Info />} */}
      {loading ? loadingDisplay : <h3>{pokemonData.name}</h3>}
    </div>
  )
}












export default ApiCaller