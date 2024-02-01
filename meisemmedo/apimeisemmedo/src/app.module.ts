import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosModule } from './usuarios/usuarios.module';


@Module({
  imports:[UsuariosModule, FilesModule, FilesModule],
  controllers:[],
  providers:[],
})
export class AppModule {}
