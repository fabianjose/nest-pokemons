import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {


  async executeSeed(){

    const {data} = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')

    data.results.forEach(({name,url})=>{
        console.log({name,url})

      const segmens = url.split('/');
      const no = +segmens[segmens.length - 2]
        console.log({name,no})
    })


    return data.results;
   }


}
