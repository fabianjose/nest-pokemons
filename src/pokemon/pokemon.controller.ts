import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ParserMongoIdPipe } from 'src/common/pipes/parser-mongo-id/parser-mongo-id.pipe';
import { PaginatioDto } from 'src/common/dto/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  //@HttpCode(HttpStatus.CREATED)
  create(@Body() createPokemonDto: CreatePokemonDto) {

    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll(@Query() PaginatioDto:PaginatioDto) { 
    console.log({PaginatioDto})
    
    return this.pokemonService.findAll(PaginatioDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(term, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParserMongoIdPipe ) id: string) {
    return this.pokemonService.remove(id);
  }
}
