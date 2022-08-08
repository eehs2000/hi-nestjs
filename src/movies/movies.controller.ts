import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') //Router
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `this will return one movie with the id: ${id}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `this will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id') //update some parts
  patch(@Param('id') movieId: string) {
    return 'this will patch';
  }
}
