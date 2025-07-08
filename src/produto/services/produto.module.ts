import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { ProdutoService } from './produto.service';
import { ProdutoController } from '../controllers/produto.controller';
import { Produto } from '../entities/produto.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [],
})
export class ProdutoModule {}