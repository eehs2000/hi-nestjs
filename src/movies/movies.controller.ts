import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies') //Router
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id') //update some parts
  patch(@Param('id') movieId: string) {
    return 'this will patch';
  }
}
