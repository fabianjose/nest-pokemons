import { IsNumber, IsPositive, IsString, Min,  MinLength } from "class-validator";


export class CreatePokemonDto {

    @IsNumber({},{ message: 'El campo "no" debe ser un número válido.' })
    @IsPositive({ message: 'El campo "no" debe ser mayor a 0.' })
    @Min(1,{ message: 'El campo "no" debe tener al menos un digito.' })
    no : number;

    @IsString({ message: 'El campo "name" debe ser de tipos string.' })
    @MinLength(3,{ message: 'El campo name debe tener minimo 3 caracteres.' })
    name: string;


}
