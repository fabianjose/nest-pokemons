import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, pokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports : [
  
  MongooseModule.forFeature([
    {
    name:Pokemon.name,
    schema:pokemonSchema,
  }
    ])
  ],
  exports : [
    MongooseModule
  ]
})

export class PokemonModule {}
