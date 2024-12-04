import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { throwError } from 'rxjs';

@Injectable()
export class ParserMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    /*     console.log({value, metadata});
     */
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a valid mongoID`);
    }
    return value.toUpperCase();
  }
}
