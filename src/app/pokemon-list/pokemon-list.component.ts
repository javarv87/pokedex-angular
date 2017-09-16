import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../pokemon';
import { PokemonService } from './../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  moduleId: module.id,
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.list()
      .then((pokemons) => {
        this.pokemons = pokemons;
      });
  }

}
