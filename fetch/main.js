async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('bad network');
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
}
getUsers();

async function getPoke() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/clefairy');
    if (!response.ok) {
      throw new Error('bad network');
    }
    const pokemons = await response.json();
    console.log(pokemons);
  } catch (error) {
    console.log(error.message);
  }
}
getPoke();
