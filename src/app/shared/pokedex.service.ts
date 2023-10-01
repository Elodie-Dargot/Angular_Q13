import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService{

  pokemons: Pokemon[] = []

  addPokemon(pokemon: Pokemon){
    this.pokemons.push(pokemon)
  }
}
