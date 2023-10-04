import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit{

  pokemons!: Pokemon[]
  selectedPokemon!: Pokemon
  showDetails: boolean = false

  constructor(private pokedexService: PokedexService){}

  ngOnInit(): void {
      this.pokemons = this.pokedexService.getPokemons()
  }

 displayDetails():void{
    this.showDetails = !this.showDetails
  }
  
  onPokemonClick(pokemon: Pokemon): void{
      if(!this.showDetails){
        this.selectedPokemon = pokemon
        this.displayDetails()
      } else {
        this.displayDetails()
      }
    }
}
