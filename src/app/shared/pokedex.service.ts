import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { pokemonMokeData } from 'src/assets/pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService{

  pokemons: Pokemon[] = pokemonMokeData

  getPokemons(){
    return this.pokemons
  }

  addPokemon(pokemon: Pokemon){
    this.pokemons.push(pokemon)
    console.log(this.pokemons)
  }
}
