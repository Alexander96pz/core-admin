import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BizzfuzzModule } from './bizzfuzz/bizzfuzz.module';
// import { BizzfuzzService } from './bizzfuzz/bizzfuzz.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
