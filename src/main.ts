import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
 /** versioning type */
 app.enableVersioning({
  type: VersioningType.URI,
});
app.use(cookieParser());
app.enableCors({
  origin: true,
  credentials: true,
});

 /** Swagger */
 const config = new DocumentBuilder()
 .setTitle('Be Todo App BTS')
 .setDescription('Be Todo App BTS Documentation Api')
 // .addServer()
 .setVersion('1')
 .addBearerAuth()
 .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);



  await app.listen(3300);
}
bootstrap();
