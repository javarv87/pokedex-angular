import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  urlPokedex = 'https://pokeapi.co/api/v2/pokedex/2/';
  urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  errMsg: string;

  constructor(private http: Http) { }

  list() {
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.urlPokedex, {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      const data = res.json();
      const allPokemon: Pokemon[] = [];
      data.pokemon_entries.forEach((entry) => {
        const pokemon: Pokemon = new Pokemon();
        pokemon.name = entry.pokemon_species.name;
        pokemon.id = entry.entry_number;
        allPokemon.push(pokemon);
      });
      return allPokemon;
    })
    .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      this.errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      this.errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(this.errMsg);
  }

  get(id: number) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.urlPokemon + id}/`, {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      const data = res.json();
      const pokemon: Pokemon = new Pokemon();
      pokemon.name = data.name;
      pokemon.id = data.id;

      data.types.forEach((eachType) => {
        pokemon.types.push(eachType.type.name);
      });

      data.stats.forEach((eachStat) => {
        pokemon.stats.push({
          name: eachStat.stat.name,
          value: eachStat.base_stat
        });
      });
      return pokemon;
    })
    .catch(this.handleError);
  }
}
