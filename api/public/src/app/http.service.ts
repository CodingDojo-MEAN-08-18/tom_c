import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }
  getPokemon() {
    const charmander = this._http.get('https://pokeapi.co/api/v2/pokemon/4/');
    let abilitystring = '';
    charmander.subscribe(<Poke>(data) => {
      console.log('Got our Pokemon!', data);
      console.log(data.abilities.length);
      for (let i=0; i<data.abilities.length; i++) {
        abilitystring += data.abilities[i].ability.name;
        if (i<data.abilities.length-1) {
          abilitystring += ' and ';
        } else {
          abilitystring += '!';
        }
      }
      console.log('The abilities of your pokemon are ' + abilitystring);
      let other = data.abilities[0].ability.url;
      const like_pokemon = this._http.get(other);
      like_pokemon.subscribe(<Poke>(other_pokemon) => {
        console.log('There are ' + (other_pokemon.pokemon.length-1) + ' other pokemon with ' + data.abilities[0].ability.name);
      });
    });
  }
}
