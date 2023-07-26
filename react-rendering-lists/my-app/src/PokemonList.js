import { pokedex } from './App';

export default function PokemonList() {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li>{pokemon.name}</li>
      ))}
    </ul>
  );
}
