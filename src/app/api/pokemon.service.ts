import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon`;

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<{
      count: number,
      next: string | null,
      previous: string | null,
      results: any[]
    }>(this.API_ENDPOINT);
  }
}
