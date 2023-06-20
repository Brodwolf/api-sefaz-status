import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostgreDefaultOptions } from 'src/common/database/PostgreDefaultOptions';

@Module({
  imports: [
    TypeOrmModule.forRoot(PostgreDefaultOptions),
    UserModule
  ],
})
export class AppModule {}
