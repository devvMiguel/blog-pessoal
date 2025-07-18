import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Module } from '@nestjs/common';
import { TemaService } from './services/tema.service';
import { TemaController } from './controllers/tema.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaService],
  controllers: [TemaController],
  exports: [TemaService],
})
export class TemaModule {}
