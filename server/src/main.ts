import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): void {
  const app: any = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
