import { Component } from '@angular/core';
import { PokemonService } from './api/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  getPokemons$ = this.pokemonService.getPokemons();

  constructor(private pokemonService: PokemonService) {}

}
