import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from './../pokemon';
import { PokemonService } from './../pokemon-service.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  providers: [PokemonService]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.pokemonService.get(+params.get('id')))
      .subscribe(pokemon => this.pokemon = pokemon);
  }
}
