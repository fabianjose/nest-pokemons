import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';


@Injectable()



export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly PokemonModel: Model<Pokemon>,


    private readonly http:AxiosAdapter,

  ){};
  async executeSeed(){

    await this.PokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    const pokemontoInsert : {name:string , no:number} [] = [];

    data.results.forEach(async ({name,url})=>{
       

      const segmens = url.split('/');
      const no = +segmens[segmens.length - 2]


      //const pokemon = await this.PokemonModel.create({name,no});
      pokemontoInsert.push({name,no})
      
    })
    await this.PokemonModel.insertMany(pokemontoInsert)

    return 'seed cargado';
   }


}
