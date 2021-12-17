import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  /**
   * Se você quiser usar o repositório fora do módulo que importa TypeOrmModule.forFeature, você precisará exportar novamente os provedores gerados por ele. Você pode fazer isso exportando todo o módulo, como este:
   */
  //exports:[TypeOrmModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
