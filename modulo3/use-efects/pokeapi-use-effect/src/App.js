import axios from "axios";
import PokeCard from "./components/PokeCard";
import React, {useState, useEffect} from "react"
// import React,  {useEffect} from 'react'

function App() {
  // Passo 3b
  // Implemente suas variáveis de estado aqui.
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")
  // Passo 3c
 const getPokemano = () => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then((res) => {
    setPokeList(res.data.results)
  })
  .catch((err) => {
    console.log(err)
  })
 }

 useEffect(() => {
   getPokemano()
 }, [])
  // Passo 3a
  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  // Passo 3e
  const pokeOptions = pokeList.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
        </option>
    )
  })

  // Passo 4a
  const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
         {/* Passo 3a */}
        <select id={"select-pokemon"} onChange={changePokeName} >
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
